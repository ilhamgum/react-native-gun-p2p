import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Screens
import Home from "../screen/Home";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import ChatRoom from "../screen/postlogin/ChatRoom";

// router
import TabRouter from "./tabRouter";

export default function StackRouter({ route }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen name="TabRouter" component={TabRouter} />
    </Stack.Navigator>
  );
}
