import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import CreateAppoitment from "../pages/CreateAppoitment";
import AppointmentCreated from "../pages/AppointmentCreated";
import Profile from "../pages/Profile";

const App = createStackNavigator();

const AppRoute: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312338" },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppoitment" component={CreateAppoitment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoute;
