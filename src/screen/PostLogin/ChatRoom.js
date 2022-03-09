import React from "react";
import { SafeAreaView, View, FlatList, VirtualizedList } from "react-native";

// dummy data
import { dataUser } from "../../assets/dummy";
import { addUser } from "../../assets/dummy";

// comps
import ChatFlatlist from "../../components/ChatFlatlist";
import Header from "../../components/Header";

// styles
import { ChatRoomStyles } from "../Styles";

export default function ChatRoom({ route, navigation }) {
  const renderItem = ({ item }) => (
    <ChatFlatlist name={item.name} message={item.message} />
  );
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
        <VirtualizedList
          data={dataUser}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // getItemCount={(data) => 5}
          // getItem={addUser}
        />
      </View>
    </SafeAreaView>
  );
}
