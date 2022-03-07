import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

// screens
import ChatRoom from "./ChatRoom";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

function MyTabBar() {
  return (
    <View
      style={{
        backgroundColor: "#F3FAFE",
        height: 70,
      }}
    >
      <View
        style={{
          height: 70,
          marginTop: 10,
          elevation: 10,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      ></View>
    </View>
  );
}

export default function PostLogin() {
  return (
    <Tab.Navigator
      initialRouteName="ChatRoom"
      tabBar={() => <MyTabBar />}
      screenOptions={{
        headerShown: false,
        // tabBarIcon: ({ color, size }) => (
        //   <Ionicons name="chatbox" color={color} size={size} />
        // ),
        // tabBarActiveTintColor: "#599CFF",
        // tabBarActiveBackgroundColor: "#EBEFFF",
        // tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          tabBarLabel: "Chat",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}
