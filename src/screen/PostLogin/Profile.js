import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  FlatList,
  Dimensions,
  Text,
} from "react-native";

import { BasicStyles } from "../Styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function Profile() {
  return (
    <SafeAreaView style={BasicStyles.container}>
      <View
        style={{
          height: (Dimensions.get("window").height * 45) / 100,
          width: Dimensions.get("window").width,
          overflow: "hidden",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <FlatList
          data={DATA}
          renderItem={({ id }) => (
            <View>
              <Image
                style={{
                  width: Dimensions.get("window").width,
                  height: 400,
                  resizeMode: "cover",
                }}
                source={{
                  uri: `https://picsum.photos/seed/${id}/400`,
                }}
              />
            </View>
          )}
          horizontal
          pagingEnabled
        />
      </View>
      <View
        style={{
          marginTop: -65,
          alignItems: "center",
          width: Dimensions.get("window").width,
          height: (Dimensions.get("window").height * 20) / 100,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
            backgroundColor: "#fff",
            width: (Dimensions.get("window").width * 80) / 100,
            height: (Dimensions.get("window").height * 18) / 100,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,

            elevation: 7,
          }}
        >
          <Text style={{ fontSize: 22 }}>User Name</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
