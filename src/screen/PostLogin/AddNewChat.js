import React from "react";
import { View, Text, Pressable, Dimensions, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BasicStyles, HomeStyles } from "../Styles";

export default function AddNewChat({ route, navigation }) {
  return (
    <SafeAreaView style={BasicStyles.container}>
      {/* header */}
      <View
        style={{
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F3FAFE",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{
              width: 50,
              height: 35,
              backgroundColor: "#599CFF",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              position: "absolute",
              left: Dimensions.get("window").width * -0.35,
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" color={"#fff"} size={22} />
          </Pressable>
          <Text style={{ fontSize: 22 }}>Contacts</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#F3FAFE" }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: "100%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
}
