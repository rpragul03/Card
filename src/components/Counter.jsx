import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/Action/Counteraction';

const Counter = () => {

    const count=useSelector((state)=>{
        return state.Counter
        
    })

    const dispatch=useDispatch();
  return (
   <>
   <h1>{count}</h1>
   <button className="btn btn-danger" onClick={()=>dispatch(increment())}>Increment</button>
   <button className="btn btn-success" onClick={()=>dispatch(reset())}>Reset</button>
   <button className='btn btn-info' onClick={()=>dispatch(decrement())}>Decrement</button>
   </>
  )
}

export default Counter