import React from "react";
import {
  Pressable,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useAuthDispatch, authUser, createUser } from "../contexts";

import { SignStyles, BasicStyles } from "./Styles";

export default function Auth({ navigation }) {
  const [hasAccount, setAccount] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [key, setKey] = React.useState("");
  const dispatch = useAuthDispatch();
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
            value={key}
            onChangeText={setKey}
          />
          <View style={SignStyles.buttonWrap}>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={SignStyles.buttonText}>Back</Text>
              </Pressable>
            </View>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() => authUser(dispatch, { key: key })}
              >
                <Text style={SignStyles.buttonText}>Login</Text>
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
            onChangeText={setUsername}
          />
          <View style={SignStyles.buttonWrap}>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={SignStyles.buttonText}>Back</Text>
              </Pressable>
            </View>
            <View style={SignStyles.pressableView}>
              <Pressable
                style={SignStyles.button}
                android_ripple={{ color: "black" }}
                onPress={() => createUser(dispatch, { username: username })}
              >
                <Text style={SignStyles.buttonText}>Register</Text>
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
