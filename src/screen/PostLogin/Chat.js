import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Pressable,
  Image,
  Text,
} from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

// styles
import { ChatRoomStyles } from "../Styles";

export default function Chat({ route, navigation }) {
  const [userData, setUserData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://randomuser.me/api/?results=10&exc=login,location,registered")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUserData(data.results);
      })
      .catch((err) => console.log(err));
  };

  const handleRefresh = () => {
    setLoading(true);
    getData();
  };

  return (
    <SafeAreaView style={ChatRoomStyles.container}>
      {/* Header */}
      <View style={ChatRoomStyles.header}>
        <View style={ChatRoomStyles.headerWrap}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={ChatRoomStyles.headerImage}
            />
          </Pressable>
          <Text>Helo, {route.params.name} </Text>
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
      {/* End Header */}
      {/* Chat Flatlist */}
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#F3FAFE",
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
      >
        <FlatList
          data={userData}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("ChatRoom", {
                  name: item.name.first,
                  photo: item.picture.medium,
                })
              }
            >
              <View style={ChatRoomStyles.item}>
                <View style={ChatRoomStyles.profilePhotoContainer}>
                  <Pressable
                    onPress={() => console.log(item.name.first)}
                    android_ripple={{ color: "#fff", borderless: true }}
                    style={ChatRoomStyles.profilePhoto}
                  >
                    <Image
                      source={{ uri: `${item.picture.medium}` }}
                      style={{ height: 50, width: 50, resizeMode: "cover" }}
                    />
                  </Pressable>
                </View>
                <View style={ChatRoomStyles.messageContainer}>
                  <Text style={ChatRoomStyles.name}>{item.name.first}</Text>
                  <Text style={ChatRoomStyles.message}>{item.gender}</Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.name.first}
          refreshing={isLoading}
          onRefresh={handleRefresh}
        />
      </View>
      {/* End Chat Flatlist */}
    </SafeAreaView>
  );
}
