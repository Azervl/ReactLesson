import React from 'react'

const input = ({ type, placeholder, onChange, name }) => {
  return <input onChange={onChange}
    name={name}
    className='input'
    type={type}
    placeholder={placeholder} />;
}

export default input