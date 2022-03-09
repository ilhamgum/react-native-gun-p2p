import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import { ChatRoomStyles } from "../screen/Styles";

export default function Header({ route, navigation }) {
  return (
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
  );
}
