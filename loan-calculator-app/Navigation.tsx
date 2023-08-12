import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./screens/Login";
import Home from "./screens/Home";

// Stack
const HomeStack = createStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="DrawerGroup" component={DrawerGroup} />
    </HomeStack.Navigator>
  );
};

// Drawer
const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Home} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
};

export default Navigation;
