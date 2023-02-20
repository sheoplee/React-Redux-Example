import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import counterSlice, {up, down, set, step} from './storeSlice';

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state=>{
    return state.counter.value;
  });
  return <div>
    <p>STEP:<input type="text" name="step" onChange={(e)=>{
      //console.log(e.target.value);
      dispatch(step(Number(e.target.value)));
    }}></input></p>
    <button onClick={()=>{
      //dispatch({type:"counterSlice/up", step:2})
      // dispatch(counterSlice.actions.up(2))
      dispatch(up(2))
    }}>+</button>
    <button onClick={()=>{
      dispatch(set(0))
    }}>0</button>
    <button onClick={()=>{
      dispatch(down(2))
    }}>-</button>
    <input value={count}></input>
  </div>
}

export default Counter;
