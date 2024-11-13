import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  width: fit;
  line-height: 24px;
  padding: 4px 16px;
  border-radius: 32px;
  justify-content: center;

  color: ${({ color }) => (color ? `${color}` : `#3B3B3B`)};

  background-color: ${({ background }) =>
    background ? `${background}` : `var(--color-white)`};
`;
