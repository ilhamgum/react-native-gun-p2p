import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChatRoom from "./ChatRoom";

const Tab = createBottomTabNavigator();

export default function PostLogin() {
  return (
    <Tab.Navigator
      initialRouteName="ChatRoom"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="ChatRoom" component={ChatRoom} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
