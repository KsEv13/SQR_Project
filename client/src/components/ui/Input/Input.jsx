import React from 'react'
import { useController } from 'react-hook-form'
import { InputStyled } from './Input.styled'

/**
 * Encapsulates registering react-hook-form input and displays errors
 * @param label
 * @param name
 * @param rules
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Input({ label, name, rules, ...rest }) {
  const { field, fieldState } = useController({ name, rules, ...rest })

  return (
    <InputStyled>
      {label}
      <input type="text" {...rest} {...field} />
      {fieldState.error && <div>{fieldState.error.message}</div>}
    </InputStyled>
  )
}

export default Input
