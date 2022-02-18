import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}></View>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.loginButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.loginText}>Sign In using ...</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.signupButton}>
          <Text style={styles.signupText}>Just Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  banner: {
    backgroundColor: "#F3FAFE",
    width: "100%",
    height: "35%",
  },
  loginButton: {
    marginTop: "10%",
    backgroundColor: "#476CF0",
    minWidth: 300,
    minHeight: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,

    elevation: 17,
  },
  loginText: {
    color: "#fff",
  },
  signupButton: {
    marginTop: "5%",
    backgroundColor: "#fff",
    minWidth: 300,
    minHeight: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 7,
  },
  signupText: {
    color: "#000",
  },
});
