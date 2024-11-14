import styled from "styled-components";
import { Button } from "../../../shared/components/atoms/button/button";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 50px);
  max-width: 674px;
  margin: 0 auto;
  padding: 97px 87px 87px;
  border-radius: 0 0 16px 16px;
  background-color: var(--color-dark-main);
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 38px;
  color: var(--color-white);
  margin: 84px 0 48px;
  font-family: "Roboto";
  font-weight: bold;
`;

export const Image = styled.img`
  width: 10rem;
`;

export const CustomButton = styled(Button)`
  justify-content: space-between;
`;
