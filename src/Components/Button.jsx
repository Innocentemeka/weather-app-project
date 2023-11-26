import React from 'react'

const Button = ({value, onClick}) => {
  return (
    <button className='search-btn' onClick={onClick}>{value}</button>
  )
}

export default Button