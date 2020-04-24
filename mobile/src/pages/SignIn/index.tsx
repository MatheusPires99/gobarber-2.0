import React from "react";
import { Image } from "react-native";

import logo from "../../assets/logo.png";

import { Container, Title } from "./styles";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />

      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignUp;
