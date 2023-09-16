import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

export const Contacts = ({ navigation }: any) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.white]}
    >
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={styles.image1}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.image2}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.image3}
          />
          <Image
            source={require("../assets/hero2.jpg")}
            style={styles.image4}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
  },
  image1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
    top: 20,
    left: 20,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
    top: -20,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  image3: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
    top: 140,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },
  image4: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 120,
    left: 100,
    opacity: 0.3,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
});
