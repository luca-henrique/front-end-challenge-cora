import { SVGProps } from "react"
export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#FE3E6D"
      fillRule="evenodd"
      d="M9.645.646a.5.5 0 0 1 .707 0l5.002 5a.5.5 0 0 1 0 .707l-5.002 5a.5.5 0 1 1-.707-.707L13.794 6.5H.999a.5.5 0 1 1 0-1h12.795L9.646 1.353a.5.5 0 0 1 0-.707Z"
      clipRule="evenodd"
    />
  </svg>
)
