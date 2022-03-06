import React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  FlatList,
} from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

// Styles
import { ChatRoomStyles } from "../Styles";
import { BasicStyles } from "../Styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Lander",
    message: "helo",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Maeve",
    message: ":D",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Deep",
    message: "helo puta",
  },
];

// Flatlist chat components
const Item = ({ name, message }) => (
  <Pressable onPress={() => console.log({ name })}>
    <View style={ChatRoomStyles.item}>
      <View style={ChatRoomStyles.profilePhotoContainer}>
        <Pressable
          android_ripple={{ color: "#eee", borderless: true }}
          style={ChatRoomStyles.profilePhoto}
        ></Pressable>
      </View>
      <View style={ChatRoomStyles.messageContainer}>
        <Text style={ChatRoomStyles.name}>{name}</Text>
        <Text style={ChatRoomStyles.message}>{message}</Text>
      </View>
    </View>
  </Pressable>
);

export default function ChatRoom({ route, navigation }) {
  const renderItem = ({ item }) => (
    <Item name={item.name} message={item.message} />
  );
  return (
    <SafeAreaView style={BasicStyles.container}>
      {/* header */}
      <View style={ChatRoomStyles.header}>
        <View style={ChatRoomStyles.headerWrap}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
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
      {/* chat flatlist */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
