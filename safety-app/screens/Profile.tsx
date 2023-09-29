import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import { Button, ImageSet } from "../components";
import { RootState, useAppSelector } from "../store/store";

export const Profile = ({ navigation }: any) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.white]}
    >
      <ImageSet />
      <Image source={require("../assets/hero3.jpg")} style={styles.userImage} />
      <View style={styles.header}>
        <Text style={styles.username}>{user?.fullName || `Test User`}</Text>
        <Text style={styles.email}>{user?.email || `user@example.com`}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>My Profile</Text>
        {/* <Text style={styles.sectionTitle}>Settings</Text> */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImage: {
    width: 150, // Adjust the width and height as needed
    height: 150,
    borderRadius: 50, // To make it a circular image
    alignSelf: "center", // To center the image horizontally
    marginTop: 20, // Add some top margin to separate from the text
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: COLORS.black,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Add more styles as needed for additional content
});

export default Profile;
