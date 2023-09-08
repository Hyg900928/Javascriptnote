import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Test = () => {
  return <div>Hello world</div>;
};

class Root extends Component {
  render() {
    console.log('props', this.props);
    return (
      <Router>
        <div>
          <Route exact path="/" component={Test} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    onClick: () => {
      dispatch({
        type: 'CHANGE_SCORE',
        score: 0.8
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
