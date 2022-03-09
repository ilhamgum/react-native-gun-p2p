import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";

// screens
import ChatRoom from "../screen/postlogin/ChatRoom";
import Profile from "../screen/postlogin/Profile";
import AddNewChat from "../screen/postlogin/AddNewChat";

// new chat custom button
const NewChatButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ top: -30, justifyContent: "center", alignItems: "center" }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#599CFF",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

export default function PostLogin() {
  return (
    <Tab.Navigator
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
        name="AddChat"
        component={AddNewChat}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Ionicons name="add" color={"#fff"} size={40} />,
          tabBarButton: (props) => <NewChatButton {...props} />,
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
