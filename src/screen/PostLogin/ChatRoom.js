import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BasicStyles } from "../Styles";

const Messages = [
  {
    id: 1,
    user: 1,
    message: "Hello, how are you? I miss u",
    time: "19:20",
  },
  {
    id: 2,
    user: 2,
    message: "Heeyy, i'm fine here. I miss u too",
    time: "19:21",
  },
];

export default function ChatRoom({ route, navigation }) {
  const [message, setMessage] = React.useState("");

  return (
    <SafeAreaView style={BasicStyles.container}>
      {/* header */}
      <View
        style={{
          height: "10%",
          justifyContent: "center",
          paddingHorizontal: 10,
          backgroundColor: "#F3FAFE",
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
              source={{ uri: `${route.params.photo}` }}
              style={{ height: 40, width: 40, borderRadius: 50 }}
            />
            {console.log(route)}
          </Pressable>
          <Text style={{ marginLeft: 10, marginTop: -5, fontSize: 22 }}>
            {route.params.name}
          </Text>
        </View>
      </View>
      {/* chat room background polish */}
      <View style={{ backgroundColor: "#F3FAFE" }}>
        {/* chat room box */}
        <View
          style={{
            height: "100%",
            backgroundColor: "#fff",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          }}
        >
          {/* chat container */}
          <View
            style={{
              height: "76%",
              width: "100%",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            {/* first-person chat bubble */}
            {/* container */}
            <View
              style={{
                height: 50,
                width: "93%",
                marginVertical: 8,
                flexDirection: "row-reverse",
              }}
            >
              {/* chat bubble */}
              <View
                style={{
                  flex: 4,
                  height: "100%",
                  backgroundColor: "#476CF0",
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  padding: 10,
                }}
              >
                <Text style={{ color: "#fee", fontSize: 15 }}>
                  Hello, how are you? I miss u
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginRight: 5,
                }}
              >
                <Text style={{ color: "#999", fontSize: 12 }}>19:20</Text>
              </View>
            </View>
            {/* second-person chat bubble */}
            {/* container */}
            <View
              style={{
                height: 50,
                width: "93%",
                marginVertical: 8,
                flexDirection: "row",
              }}
            >
              {/* chat bubble */}
              <View
                style={{
                  flex: 4,
                  height: "100%",
                  backgroundColor: "#8298EA",
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: 10,
                }}
              >
                <Text style={{ color: "#fee", fontSize: 15 }}>
                  Heeyy, i'm fine here. I miss u too
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  marginLeft: 5,
                }}
              >
                <Text style={{ color: "#999", fontSize: 12 }}>19:20</Text>
              </View>
            </View>
          </View>
          {/* text input box */}
          <View
            style={{
              width: "100%",
              position: "absolute",
              padding: 10,
              bottom: Dimensions.get("window").height * 0.11,
              flexDirection: "row",
            }}
          >
            <TextInput
              style={{
                flex: 5,
                borderWidth: 1,
                borderColor: "#aaa",
                borderRadius: 50,
                paddingVertical: 10,
                paddingHorizontal: 13,
                backgroundColor: "#fff",
              }}
              value={message}
              onChangeText={setMessage}
              placeholder="Type a message"
            />
            <Pressable
              style={{
                flex: 1,
                marginLeft: 5,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                backgroundColor: "#476CF0",
              }}
              onPress={() => console.log("sent")}
            >
              <Ionicons name="send" color={"#fff"} size={20} />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
