import { ButtonHTMLAttributes } from "react"

import { Button } from "./style"

const variants = {
  containedPrimary: { background: '#3B3B3B', color: "#fff" },
  containedSecondary: { background: '#F0F4F8', color: "#3B3B3B" }
} as const;

export type ButtonVariant = keyof typeof variants;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export const SwitchButton = ({ children, variant = 'containedPrimary', ...props }: ButtonProps) => {

  const defaultStyle = variants[variant]


  return (<Button {...defaultStyle} {...props}>{children}</Button>)
}
