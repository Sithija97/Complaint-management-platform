import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";

export const Signup = ({ navigation }: any) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = () => {
    console.log(username, email, password);
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.baseViewContainer}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.title}>Create Account</Text>

          <Text style={styles.subtitle}>Connect with your friend today!</Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Username</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your username"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{
                width: "100%",
              }}
              value={username}
              onChange={(
                event: NativeSyntheticEvent<TextInputChangeEventData>
              ) => setUsername(event.nativeEvent.text)}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Email address</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
              value={email}
              onChange={(
                event: NativeSyntheticEvent<TextInputChangeEventData>
              ) => setEmail(event.nativeEvent.text)}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Password</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
              value={password}
              onChange={(
                event: NativeSyntheticEvent<TextInputChangeEventData>
              ) => setPassword(event.nativeEvent.text)}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.termsConditionsContainer}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>I aggree to the terms and conditions</Text>
        </View>

        <Button
          title="Sign Up"
          filled
          style={styles.signupButton}
          onPress={SignUp}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Already have an account</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginButtonTitle}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  baseViewContainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  inputWrapper: {
    marginBottom: 12,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  inputContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  passwordVisibleIcon: {
    position: "absolute",
    right: 12,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  loginTitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  loginButtonTitle: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
  termsConditionsContainer: {
    flexDirection: "row",
    marginVertical: 6,
  },
  signupButton: {
    marginTop: 18,
    marginBottom: 4,
  },
});
