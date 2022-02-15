import React from 'react'

const Header = ({title, color}) => {
  return (
      <h1 style={{color:color}}>{title}</h1>
  )
}

export default Header