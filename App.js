import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MenuProvider } from "react-native-popup-menu";

import "react-native-get-random-values";
import WebviewCrypto from "react-native-webview-crypto";
import PolyfillCrypto from "react-native-webview-crypto";
import { AuthProvider } from "./src/contexts";

import Main from "./src/screen/Main";

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <PolyfillCrypto />
        <AuthProvider>
          <Main />
        </AuthProvider>
      </NavigationContainer>
    </MenuProvider>
  );
}
