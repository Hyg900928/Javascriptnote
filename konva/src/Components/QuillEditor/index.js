import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';

const CustomButton = () => <span className="octicon octicon-star" />;

const Bold = Quill.import('formats/bold');

Bold.tagName = 'B';   // Quill uses <strong> by default
Quill.register(Bold, true);


/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}


const CustomToolbar = () => (
  <div id="toolbar" style={{height: '50px'}}>
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1" />
      <option value="2" />
      <option value="" />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
      <option selected />
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
);

const CustormCounter = () => {
  return (
    <div id="counter">

    </div>
  )
}

class Counter {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on('text-change', this.update.bind(this));
    this.update();  // Account for initial contents
  }

  calculate() {
    let text = this.quill.getText();
    if (this.options.unit === 'word') {
      text = text.trim();
      // Splitting empty text returns a non-empty array
      return text.length > 0 ? text.split(/\s+/).length : 0;
    } else {
      return text.length;
    }
  }

  update() {
    const length = this.calculate();
    let label = this.options.unit;
    if (length !== 1) {
      label += 's';
    }
    this.container.innerText = length + ' ' + label;
  }
}

Quill.register('modules/counter', Counter);



const EMPTY_DELTA = { ops: [] };
class QuillEditor extends React.Component {
  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    counter: {
      container: '#counter',
      unit: 'word'
    }
  }
  formats = [

  ];
  constructor(props) {
    super(props);
    this.state = {
      theme: 'snow',
      enabled: true,
      readOnly: false,
      value: EMPTY_DELTA,
      events: []
    };
  }

  formatRange(range) {
    return range ? [range.index, range.index + range.length].join(',') : 'none';
  }

  onEditorChange = (value, delta, source, editor) => {
    this.setState({
      value: editor.getContents(),
      events: [`[${source}] text-change`, ...this.state.events]
    });
  };

  onEditorChangeSelection = (range, source) => {
    this.setState({
      selection: range,
      events: [
        `[${source}] selection-change(${this.formatRange(
          this.state.selection
        )} -> ${this.formatRange(range)})`,
        ...this.state.events
      ]
    });
  };

  onEditorFocus = (range, source) => {
    this.setState({
      events: [`[${source}] focus(${this.formatRange(range)})`].concat(this.state.events)
    });
  };

  onEditorBlur = (previousRange, source) => {
    this.setState({
      events: [`[${source}] blur(${this.formatRange(previousRange)})`].concat(this.state.events)
    });
  };

  onToggle = () => {
    this.setState({ enabled: !this.state.enabled });
  };

  onToggleReadOnly = () => {
    this.setState({ readOnly: !this.state.readOnly });
  };

  onSetContents = () => {
    this.setState({ value: 'This is some <b>fine</b> example content' });
  };

  renderToolbar() {
    const state = this.state;
    const enabled = state.enabled;
    const readOnly = state.readOnly;
    const selection = this.formatRange(state.selection);
    return (
      <div>
        <button onClick={this.onToggle}>{enabled ? 'Disable' : 'Enable'}</button>
        <button onClick={this.onToggleReadOnly}>Set {readOnly ? 'read/Write' : 'read-only'}</button>
        <button onClick={this.onSetContents}>Fill contents programmatically</button>
        <button disabled={true}>Selection: ({selection})</button>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div style={{ overflow: 'hidden', float: 'right' }}>
        <textarea
          style={{ display: 'block', width: 300, height: 300 }}
          value={JSON.stringify(this.state.value, null, 2)}
          readOnly={true}
        />
        <textarea
          style={{ display: 'block', width: 300, height: 300 }}
          value={this.state.events.join('\n')}
          readOnly={true}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderToolbar()}
        <hr />
        {this.renderSidebar()}
        {this.state.enabled && (
          <div>
            {/*<CustomToolbar />*/}
            <CustormCounter />
            <ReactQuill
              theme={this.state.theme}
              value={this.state.value}
              readOnly={this.state.readOnly}
              onChange={this.onEditorChange}
              onChangeSelection={this.onEditorChangeSelection}
              onFocus={this.onEditorFocus}
              onBlur={this.onEditorBlur}
              style={{ height: '800px' }}
              modules={this.modules}
              formats={this.formats}
            />
          </div>

        )}
      </div>
    );
  }


}

export default QuillEditor;
