
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount, reset } from './features/counter/counterslice'
import { useRef } from 'react'
function App() {
  const ab = useRef()


  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }
  
  const handleDecrement = () => { 
  dispatch(decrement())
  }

  const incrementByAmountt = () => {
    const amount = Number(ab.current.value) || 0
    dispatch(incrementByAmount(amount))
  }
  const handlereset = () => {
    dispatch(reset())
  }
  return (
   <div>
    <button onClick={handleIncrement} > + </button>
    <p>Count : {count}</p>
    <p><input ref={ab} type="number" name="" id="" placeholder='Enter any number to increse in the count' /></p>
    <button onClick={incrementByAmountt}> Increase By this number</button>
    <br />
    <br />
    <button onClick={handleDecrement}> - </button>
    <br />
    <p><button onClick={handlereset}>Reset</button></p>
   </div>
  )
}

export default App
