import React from "react";

import GlobalStyle from "./styles/global";

import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SignIn />
    </>
  );
};

export default App;
