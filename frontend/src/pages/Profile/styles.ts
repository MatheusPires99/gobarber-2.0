import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: -176px auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;

    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    div:nth-child(5) {
      margin-top: 24px;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: background 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e28;
    }

    &:hover {
      background: ${shade(0.2, "#ff9000")};
    }
  }
`;
