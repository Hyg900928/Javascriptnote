import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/reducer/counterSlice'

export default function Counter(props) {
  console.log('props===>', props)
  const count = useSelector((state) => {
    console.log('state===>', state);
    return state.counter.value
  })
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
