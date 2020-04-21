import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

import { Container } from "./styles";

// Fazendo com que a propriedade name do input seja obrigatória
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
