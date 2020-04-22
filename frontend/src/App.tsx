import React from "react";

import GlobalStyle from "./styles/global";

import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

import AuthContext from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: "Matheus" }}>
        <GlobalStyle />
        <SignIn />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  );
};

export default App;
