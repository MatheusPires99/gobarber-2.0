import React from "react";
import { Image } from "react-native";

import logo from "../../assets/logo.png";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title } from "./styles";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log("xD");
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignUp;
