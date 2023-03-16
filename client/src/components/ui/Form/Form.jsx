import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { FormStyled } from './Form.styled'

/**
 * Encapsulates logic of context from react-hook-form
 * @param onSubmit
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function Form({ onSubmit, children, defaultValues }) {
  const methods = useForm({ defaultValues })

  return (
    <FormProvider {...methods}>
      <FormStyled onSubmit={methods.handleSubmit(onSubmit)}>{children}</FormStyled>
    </FormProvider>
  )
}

export default Form
