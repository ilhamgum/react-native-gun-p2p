import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// styles
import { BasicStyles } from "../Styles";

export default function ChatRoom({ route, navigation }) {
  const [message, setMessage] = React.useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F3FAFE",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* header */}
      <View
        style={{
          height: "10%",
          justifyContent: "center",
          paddingHorizontal: 10,
          backgroundColor: "#F3FAFE",
        }}
      >
        {/* back button */}
        <Pressable
          style={{
            width: 40,
            height: 35,
            backgroundColor: "#599CFF",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            position: "absolute",
            left: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" color={"#fff"} size={22} />
        </Pressable>

        {/* profile */}
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginLeft: Dimensions.get("window").width * 0.13,
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
                width: "93%",
                marginVertical: 8,
                flexDirection: "row-reverse",
              }}
            >
              {/* chat bubble */}
              <View
                style={{
                  maxWidth: "90%",
                  backgroundColor: "#476CF0",
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  padding: 10,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  Hello, how are you?
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
