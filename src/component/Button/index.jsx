import { useState } from 'react';
import './Button.css';

export const Button = () => {

     const [count,setCount] =useState(0)
  return (
    <div className="button-details">
            <button onClick={()=>setCount(count+1)}>+</button>
            {<h1>{count}</h1>}
        <button onClick={ ()=>setCount(count-1)}>-</button>

         </div> 
  )
}
