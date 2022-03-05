import React from "react";
import { Pressable, Text, SafeAreaView, View, TextInput } from "react-native";

import { SignStyles } from "./Styles";

export default function SignIn({ navigation }) {
  const [username, onUsernameChange] = React.useState("");
  const [password, onPasswordChange] = React.useState("");

  return (
    <SafeAreaView style={SignStyles.container}>
      <View style={SignStyles.formWrap}>
        <Text style={SignStyles.title}>Sign In</Text>
        <TextInput
          placeholder="username"
          style={SignStyles.textInput}
          value={username}
          onChangeText={onUsernameChange}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          style={SignStyles.textInput}
          value={password}
          onChangeText={onPasswordChange}
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
                navigation.navigate("PostLogin", {
                  screen: "ChatRoom",
                  params: { name: username },
                })
              }
            >
              <Text style={SignStyles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
