import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChatRoom from "./ChatRoom";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function PostLogin() {
  return (
    <Tab.Navigator
      initialRouteName="ChatRoom"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="ChatRoom" component={ChatRoom} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
