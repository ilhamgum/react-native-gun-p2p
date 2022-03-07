import * as React from "react";

// React-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Screens
import Home from "./src/screen/Home";
import SignIn from "./src/screen/SignIn";
import SignUp from "./src/screen/SignUp";
import postlogin from "./src/screen/postlogin/";

import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="postlogin" component={postlogin} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
