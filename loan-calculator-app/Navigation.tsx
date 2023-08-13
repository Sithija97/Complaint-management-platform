import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Home, Login } from "./screens";
import { COLORS } from "./constants/colors";

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
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={"home"} size={size} color={COLORS.black} />
          ),
          drawerLabelStyle: { color: COLORS.black },
        }}
      />
      <Drawer.Screen
        name="Exchange Rates"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={"card"} size={size} color={COLORS.black} />
          ),
          drawerLabelStyle: { color: COLORS.black },
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
