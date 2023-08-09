import { View, Text, Button } from "react-native";
import React from "react";

const Login = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("DrawerGroup")}
      />
    </View>
  );
};

export default Login;
