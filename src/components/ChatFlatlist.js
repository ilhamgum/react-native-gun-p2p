import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from "react-native";

// styles
import { ChatRoomStyles } from "../screen/Styles";

export default function ChatFlatlist({ name, message }) {
  return (
    <Pressable onPress={() => console.log({ name })}>
      <View style={ChatRoomStyles.item}>
        <View style={ChatRoomStyles.profilePhotoContainer}>
          <Pressable
            onPress={() => console.log({ name })}
            android_ripple={{ color: "#fff", borderless: true }}
            style={ChatRoomStyles.profilePhoto}
          >
            <Image
              source={{ uri: `https://picsum.photos/200/300?random=${name}` }}
              style={{ height: 50, width: 50, resizeMode: "cover" }}
              onp
            />
          </Pressable>
        </View>
        <View style={ChatRoomStyles.messageContainer}>
          <Text style={ChatRoomStyles.name}>{name}</Text>
          <Text style={ChatRoomStyles.message}>{message}</Text>
        </View>
      </View>
    </Pressable>
  );
}
