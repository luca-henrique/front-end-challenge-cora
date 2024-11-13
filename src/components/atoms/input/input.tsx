import { InputHTMLAttributes } from "react"

import { Container, Input as StyledInput } from "./style"


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMesssage?: string
}

export const Input = ({ errorMesssage, ...props }: CustomInputProps) => {
  return (
    <Container>
      <StyledInput {...props} />
      <label>{errorMesssage && errorMesssage}</label>
    </Container>
  )
}
