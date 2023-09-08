import ReactDOM from 'react-dom';
import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

// 定义action
const CHANGE_SCORE = 'CHANGE_SCORE';

// 定义初始state
const initState = {
  score: 0.5
};

// 定义reducer
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return { ...state, score: action.score };
    default:
      break;
  }
};

const initialState = {
  past: [],
  present: null, // (?) How do we initialize the present?
  future: []
}

function undoable(reducer) {
  // Call the reducer with empty action to populate the initial state
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }

  // Return a reducer that handles undo and redo
  return function (state = initialState, action) {
    const { past, present, future } = state

    switch (action.type) {
      case 'UNDO':
        const previous = past[past.length - 1]
        const newPast = past.slice(0, past.length - 1)
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        }
      case 'REDO':
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action)
        if (present === newPresent) {
          return state
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
  }
}

// 定义中间件
const logger = ({ getState, dispatch }) => next => action => {
  console.log('[logger]即将执行', action);

  // 调用middleware 链中下一个middleware的dispatch
  let returnValue = next(action);
  console.log('[logger]执行完成后 state:', getState);
  return returnValue;
};

const store = createStore(reducer, initState, applyMiddleware(logger));
console.log('store', store);
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
// render()
// store.subscribe(render())

// store.dispatch({
//     type: 'CHANGE_SCORE',
//     score: 0.8
// })

// // 中间件就是一个函数 ,它只是一个用来加工dispatch的工厂, 需要加工什么样的dispatch出来,需要传入对应的中间件函数
// // 中间件雏形
// // 封装dispatch函数
// let next = store.dispatch
// store.dispatch = function dispatchAndLog(action) {
//     console.log('dispatching', action)
//     next(action)
// }

// // 这是一个精简版的applyMiddleware
// const applyMiddleware = middleware => {
//     let next = store.dispatch;

//     store.dispatch = middleware(store)(next) // 这里传入store, 是因为中间件中有可能会用到getState获取数据, 比如打印用户等需求
// }
