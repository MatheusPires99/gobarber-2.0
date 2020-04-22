import styled, { keyframes, css } from "styled-components";

export const SpinnerContainer = styled.i`
  width: 25px;
  height: 25px;
  display: block;
  position: relative;
  margin: 0 auto;
`;

const skbounce = keyframes`
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
`;

export const Bouce1 = styled.i`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  ${css`
    animation: ${skbounce} 2s infinite ease-in-out;
  `}
`;

export const Bouce2 = styled.i`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  ${css`
    animation: ${skbounce} 2s infinite ease-in-out;
    animation-delay: -1s;
  `}
`;
