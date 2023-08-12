import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Login, Signup, Tips, Welcome } from "./screens";
import { Ionicons } from "@expo/vector-icons";

// Stack
const HomeStack = createStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Welcome" component={Welcome} />
      <HomeStack.Screen name="Signup" component={Signup} />
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
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={"home"} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tips"
        component={Tips}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={"bulb"} size={size} color={color} />
          ),
        }}
      />
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
