import React from 'react'
import './style.css'

const Input = ({ id, onChange, value }) => (
  <input
    className="form-field__input"
    id={id}
    onChange={onChange}
    value={value}
  />
)

export default Input