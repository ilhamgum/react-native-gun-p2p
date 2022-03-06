import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ChatRoom from "./ChatRoom";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function PostLogin() {
  return (
    <Tab.Navigator
      initialRouteName="ChatRoom"
      screenOptions={{ headerShown: false }}
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
