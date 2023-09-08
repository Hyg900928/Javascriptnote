import React from 'react';
import CounterComponent from './components/Counter';

class App extends React.Component {
  render() {
    console.log('Appprops', this.props);
    return (
      <div>
        <CounterComponent />
      </div>
    );
  }
}

export default App;
