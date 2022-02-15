import React from 'react'

const Button = ({text, click, color}) => {
  return (
      <div>
          <button className='btn' onClick={click} style={{background:color}}>{text}</button>
      </div>
  )
}

export default Button