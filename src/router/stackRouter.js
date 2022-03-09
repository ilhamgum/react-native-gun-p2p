import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Screens
import Home from "../screen/Home";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import tabRouter from "./tabRouter";

export default function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TabRouter" component={tabRouter} />
    </Stack.Navigator>
  );
}
