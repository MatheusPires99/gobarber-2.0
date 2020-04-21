import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  color: #666360;
  border: 2px solid #232129;
  border-radius: 10px;
  padding-left: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;
    padding: 16px 16px 16px 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
