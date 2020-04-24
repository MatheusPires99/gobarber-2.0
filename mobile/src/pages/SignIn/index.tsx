import React from "react";
import { Image } from "react-native";

import logo from "../../assets/logo.png";

import { Container } from "./styles";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};

export default SignUp;
