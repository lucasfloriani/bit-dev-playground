import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import './style.css'

const Label = ({ children, id }) => {
  const themeContext = useContext(ThemeContext);
  const color = themeContext?.palette?.grayscale?.[1] ?? '#000';

  return (
    <label className="form-field__label" htmlFor={id} style={{ color }}>
      {children}
    </label>
  )
}

export default Label