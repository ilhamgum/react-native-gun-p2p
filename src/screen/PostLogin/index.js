import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

// screens
import ChatRoom from "./ChatRoom";
import Profile from "./Profile";

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

const Tab = createBottomTabNavigator();

export default function PostLogin() {
  return (
    <Tab.Navigator
      // tabBar={() => <MyTabBar />}
      initialRouteName="ChatRoom"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: "10%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#599CFF",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
