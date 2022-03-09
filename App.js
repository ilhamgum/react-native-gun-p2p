import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MenuProvider } from "react-native-popup-menu";
import StackRouter from "./src/router/stackRouter";

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </MenuProvider>
  );
}
