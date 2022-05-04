import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Screens
import Home from "../screen/Home";
import Auth from "../screen/Auth";
import ChatRoom from "../screen/PostLogin/ChatRoom";

// router
import TabRouter from "./tabRouter";

export default function StackRouter({ route }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen name="TabRouter" component={TabRouter} />
    </Stack.Navigator>
  );
}
