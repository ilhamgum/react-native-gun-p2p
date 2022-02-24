import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";

// Styling
import { HomeStyles } from "./Styles";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <View style={HomeStyles.banner}></View>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={HomeStyles.loginButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={HomeStyles.loginText}>I already have an account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={HomeStyles.signupButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={HomeStyles.signupText}>Sign me up!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
