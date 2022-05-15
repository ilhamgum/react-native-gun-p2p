import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  ImageBackground,
  View,
  FlatList,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";

import { useAuth } from "../../contexts";

import { BasicStyles } from "../Styles";

const DATA = [
  {
    id: 75,
    title: "First Item",
  },
  {
    id: 36,
    title: "Second Item",
  },
  {
    id: 58,
    title: "Third Item",
  },
];

export default function Profile() {
  const profile = useAuth();
  return (
    <SafeAreaView style={BasicStyles.container}>
      <View style={styles.photoProfileContainer}>
        <FlatList
          data={DATA}
          renderItem={({ id }) => (
            <View>
              <ImageBackground
                style={styles.photoProfile}
                source={{
                  uri: `https://randomuser.me/api/portraits/men/75.jpg`,
                }}
              >
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,.6)"]}
                  style={styles.photoProfileTint}
                />
              </ImageBackground>
            </View>
          )}
          horizontal
          pagingEnabled
        />
      </View>
      <View style={styles.contentBoxContainer}>
        <View style={styles.contentBox}>
          <Text style={{ fontSize: 20 }}>User Name</Text>
          <Text style={{ fontSize: 20 }}>Contacts</Text>
        </View>
        <Text style={{ marginTop: 30 }}>key : {profile.key}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  photoProfileContainer: {
    height: (Dimensions.get("window").height * 45) / 100,
    width: Dimensions.get("window").width,
    overflow: "hidden",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  photoProfile: {
    width: Dimensions.get("window").width,
    height: 400,
    resizeMode: "cover",
  },
  photoProfileTint: {
    position: "absolute",
    height: 400,
    width: Dimensions.get("window").width,
  },
  contentBoxContainer: {
    marginTop: -50,
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height * 20) / 100,
  },
  contentBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 40,
    backgroundColor: "#fff",
    width: (Dimensions.get("window").width * 80) / 100,
    height: (Dimensions.get("window").height * 15) / 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 7,
  },
});
