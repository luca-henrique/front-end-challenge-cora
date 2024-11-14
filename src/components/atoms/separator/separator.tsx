import styled from "styled-components"

interface SeparatorProps {
  height: number
}

export const Separator = styled.div<SeparatorProps>`
  margin: ${({ height }) =>
    height ? height : 1}px;
`
