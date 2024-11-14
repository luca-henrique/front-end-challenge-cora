import { InputHTMLAttributes } from "react"

import { Container, ErroLabel, Input as StyledInput } from "./style"


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMesssage?: string
}

export const Input = ({ errorMesssage, ...props }: CustomInputProps) => {
  return (
    <Container>
      <StyledInput {...props} />
      <ErroLabel >{errorMesssage ?? errorMesssage}</ErroLabel>
    </Container>
  )
}
