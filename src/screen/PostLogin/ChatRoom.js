import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

import { BasicStyles } from "../Styles";

export default function ChatRoom({ route, navigation }) {
  return (
    <SafeAreaView style={BasicStyles.container}>
      <View
        style={{
          height: "10%",
          justifyContent: "center",
          paddingHorizontal: 10,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={{ height: 40, width: 40, borderRadius: 50 }}
            />
          </Pressable>
          <Text style={{ marginLeft: 10, marginTop: -5, fontSize: 22 }}>
            {route.params.name}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
