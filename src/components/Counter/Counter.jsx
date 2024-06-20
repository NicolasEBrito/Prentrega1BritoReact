import React from 'react'

const Counter = ({count, handleCount, stock}) => {
    
  const subeCount = ()=>{
    if (count < stock)
      handleCount(count =>count+1)
  }
  const bajaCount = ()=>{
    if(count > 1)
      handleCount(count =>count-1)

  }
  return (
    <div>
        <button onClick={bajaCount}>-</button> 
        <span>{count}</span>
        <button onClick={subeCount}>+</button>
  </div>
  )
}

export default Counter;