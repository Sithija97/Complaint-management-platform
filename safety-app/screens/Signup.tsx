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

export const Signup = ({ navigation }: any) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.baseViewContainer}>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.title}>Create Account</Text>
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.nameInputContainer}>
            <View style={styles.nameInput1}>
              <Text style={styles.inputTitle}>First Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="first name"
                  placeholderTextColor={COLORS.black}
                  keyboardType="default"
                  style={{
                    width: "100%",
                  }}
                />
              </View>
            </View>

            <View style={styles.nameInput2}>
              <Text style={styles.inputTitle}>Second Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="second name"
                  placeholderTextColor={COLORS.black}
                  keyboardType="default"
                  style={{
                    width: "100%",
                  }}
                />
              </View>
            </View>
          </View>

          <Text style={styles.inputTitle}>Email address</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="email address"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>

          <Text style={styles.inputTitle}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
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

          <Text style={styles.inputTitle}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="confirm password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
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

          <Text style={styles.inputTitle}>Address</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder=" address"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{
                width: "100%",
              }}
            />
          </View>

          <Text style={styles.inputTitle}>Contact Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder=" email address"
              placeholderTextColor={COLORS.black}
              keyboardType="phone-pad"
              style={{
                width: "100%",
              }}
            />
          </View>

          <Text style={styles.inputTitle}>NIC</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder=" nic"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Register</Text>
          </View>
        </TouchableOpacity>

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
  nameInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 8,
  },
  nameInput1: {
    flex: 1,
    marginRight: 8,
  },
  nameInput2: {
    flex: 1,
    marginLeft: 8,
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
    color: COLORS.secondary,
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
  errorText: {
    color: "red", // You can change the color to your preferred error color
    fontSize: 14, // You can adjust the font size as needed
    marginTop: 5, // Add some spacing from the input field
  },
  submitButton: {
    backgroundColor: COLORS.secondary, // Change the background color to your preferred color
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10, // Adjust the margin as needed
  },
  submitButtonText: {
    color: "white", // Change the text color to your preferred color
    fontSize: 18,
    fontWeight: "bold",
  },
});
