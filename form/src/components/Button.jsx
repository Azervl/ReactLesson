import React from 'react'

const button = ({ text, className, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>{text}</button>
  )
}

export default button