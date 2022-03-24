import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Pressable,
  Image,
  ImageBackground,
  Text,
  Modal,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Ionicons } from "@expo/vector-icons";

// styles
import { ChatRoomStyles } from "../Styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Chat({ route, navigation }) {
  const [userData, setUserData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);

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

  const openModal = (item) => {
    setModalData(item);
    setModalVisible(!modalVisible);
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
        <View
          style={{
            height: "75%",
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
                    photo: item.picture.thumbnail,
                  })
                }
              >
                <View style={ChatRoomStyles.item}>
                  <View style={ChatRoomStyles.profilePhotoContainer}>
                    <Pressable
                      onPress={() => {
                        openModal(item);
                      }}
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
      {/* End Chat Flatlist */}

      {/* Profile modal */}
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <Pressable
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onPress={() => {
            setModalData(null);
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              width: "80%",
              marginTop: "30%",
              borderRadius: 10,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: 300,
              }}
              source={{
                uri: modalData
                  ? modalData.picture.large
                  : "https://via.placeholder.com/600/92c952",
              }}
            >
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,.8)"]}
                style={{
                  position: "absolute",
                  height: 400,
                  width: "100%",
                }}
              />
            </ImageBackground>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#292929",
                flexDirection: "row",
              }}
              onPress={() => {
                setModalData(null);
                setModalVisible(!modalVisible);
                navigation.navigate("ChatRoom", {
                  name: modalData.name.first,
                  photo: modalData.picture.thumbnail,
                });
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Ionicons name="chatbubbles" color={"#C5CEEE"} size={25} />
                <Text style={{ color: "#C5CEEE", marginLeft: 5, fontSize: 16 }}>
                  {"Chat"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
      {/* End Profile modal */}
    </SafeAreaView>
  );
}
