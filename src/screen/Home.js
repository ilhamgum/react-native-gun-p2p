import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#F3FAFE",
          width: "100%",
          height: "40%",
          marginTop: "-10%",
        }}
      ></View>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
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
              height: 3,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,

            elevation: 7,
          }}
          onPress={() => navigation.navigate("Auth")}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Getting Started!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
