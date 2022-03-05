import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

// Styles
import { ChatRoomStyles } from "../Styles";
import { BasicStyles } from "../Styles";

export default function ChatRoom({ route, navigation }) {
  return (
    <SafeAreaView style={BasicStyles.container}>
      <View style={ChatRoomStyles.header}>
        <View style={ChatRoomStyles.headerWrap}>
          <Pressable onPress={() => alert("pressed")}>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={ChatRoomStyles.headerImage}
              onp
            />
          </Pressable>
          <Text>Helo, {route.params.name} </Text>
          {/*  */}
          <Menu>
            <MenuTrigger text="Menu" />
            <MenuOptions>
              <MenuOption
                onSelect={() => alert("Ilham Gumilang 2022")}
                text="Credits"
              />
              <MenuOption
                onSelect={() => navigation.navigate("Home")}
                text="Logout"
              />
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </SafeAreaView>
  );
}
