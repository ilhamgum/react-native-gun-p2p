import React from "react";
import { SafeAreaView, View, FlatList } from "react-native";

// styles
import { ChatRoomStyles } from "../Styles";

// components
import ChatFlatlist from "../../components/ChatFlatlist";
import Header from "../../components/Header";

export default function ChatRoom({ route, navigation }) {
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&exc=login,location,registered")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={ChatRoomStyles.container}>
      <Header route={route} navigation={navigation} />
      {/* chat flatlist */}
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#F3FAFE",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: "100%",
          elevation: 15,
        }}
      >
        <FlatList
          data={userData}
          renderItem={({ item }) => (
            <ChatFlatlist
              name={item.name.first}
              message={item.gender}
              picture={item.picture.medium}
            />
          )}
          keyExtractor={(item) => item.name.first}
        />
      </View>
    </SafeAreaView>
  );
}
