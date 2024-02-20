import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/redux/reduxSlice'

const App = () => {
  const count = useSelector((state) => state.redux.value)
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

export default App