import React from "react";
import { View, StatusBar } from "react-native";

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312338" />
      <View style={{ flex: 1, backgroundColor: "#312338" }} />
    </>
  );
};

export default App;
