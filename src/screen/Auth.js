import React from "react";
import {
  Pressable,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SignStyles, BasicStyles } from "./Styles";

export default function Auth({ navigation }) {
  const [username, onUsernameChange] = React.useState("");
  const [password, onPasswordChange] = React.useState("");
  const [hasAccount, setAccount] = React.useState(false);
  const toggleState = () => {
    setAccount(!hasAccount);
  };

  const SignIn = () => {
    return (
      <SafeAreaView style={BasicStyles.container}>
        <View style={SignStyles.formWrap}>
          <Text style={SignStyles.title}>Sign In</Text>
          <TextInput
            placeholder="input the key"
            style={SignStyles.textInput}
            value={username}
            onChangeText={onUsernameChange}
          />
          <View style={SignStyles.buttonWrap}>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={SignStyles.buttonText}>Back Home</Text>
              </Pressable>
            </View>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() =>
                  navigation.navigate("TabRouter", {
                    screen: "Chat",
                    params: { name: username },
                  })
                }
              >
                <Text style={SignStyles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
          <TouchableOpacity onPress={toggleState}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 200,
                textAlign: "center",
              }}
            >
              I don't have an account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const SignUp = () => {
    return (
      <SafeAreaView style={BasicStyles.container}>
        <View style={SignStyles.formWrap}>
          <Text style={SignStyles.title}>Sign Up</Text>
          <TextInput
            placeholder="input username"
            style={SignStyles.textInput}
            value={username}
            onChangeText={onUsernameChange}
          />
          <View style={SignStyles.buttonWrap}>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={SignStyles.buttonText}>Back Home</Text>
              </Pressable>
            </View>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() =>
                  navigation.navigate("TabRouter", {
                    screen: "Chat",
                    params: { name: username },
                  })
                }
              >
                <Text style={SignStyles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
          <TouchableOpacity onPress={toggleState}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 200,
                textAlign: "center",
              }}
            >
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  return hasAccount ? SignIn() : SignUp();
}
