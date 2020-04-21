import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

// Fazendo com que a todas as propriedades do button sejam opcionais
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
