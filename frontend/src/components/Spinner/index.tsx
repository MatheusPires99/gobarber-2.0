import React from "react";

import { SpinnerContainer, Bouce1, Bouce2 } from "./styles";

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Bouce1 />
      <Bouce2 />
    </SpinnerContainer>
  );
};

export default Spinner;
