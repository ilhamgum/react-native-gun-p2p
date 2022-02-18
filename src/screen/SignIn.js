import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.backHome}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.backHomeText}>Back Home</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backHome: {
    backgroundColor: "#476CF0",
    minWidth: 50,
    minHeight: 50,
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
  backHomeText: {
    color: "#fff",
  },
});
