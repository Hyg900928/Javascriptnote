import React from 'react';
import Root from './router';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <Root />
      </div>
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
    onClick: () => {
      dispatch({
        type: 'CHANGE_SCORE',
        score: 0.8
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
