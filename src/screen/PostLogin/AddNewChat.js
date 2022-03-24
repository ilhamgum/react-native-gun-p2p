import React from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BasicStyles, ChatRoomStyles } from "../Styles";

export default function AddNewChat({ route, navigation }) {
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
        >
          <View
            style={{
              height: "100%",
              width: "100%",
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
                        onPress={() =>
                          navigation.navigate("ChatRoom", {
                            name: item.name.first,
                            photo: item.picture.medium,
                          })
                        }
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
        </View>
      </View>
    </SafeAreaView>
  );
}
