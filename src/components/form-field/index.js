import React from 'react'
import Label from '../../dont-push-components/label'
import Input from '../../dont-push-components/input'
import './style.css'

const FormField = ({
  labelText,
  id,
  onChange,
  value,
}) => (
  <div className="form-field">
    <Input
      id={id}
      onChange={onChange}
      value={value}
    />
    <Label id={id}>{labelText}</Label>
  </div>
)

export default FormField
