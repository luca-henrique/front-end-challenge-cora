import { ButtonHTMLAttributes } from "react"
import { Button as StyledButton } from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}




export const Button = ({ children, ...props }: ButtonProps) => {
  return (<StyledButton  {...props}>{children}</StyledButton>)
}
