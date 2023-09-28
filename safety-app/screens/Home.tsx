import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import * as location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import { Button, ImageSet } from "../components";
import { useAppDispatch } from "../store/store";
import { notifyEmergencyAlert } from "../store/emergency/emergencySlice";

export const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const sendUserLocation = async () => {
    let { status } = await location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied!");
    }
    let userLocation = await location.getCurrentPositionAsync({
      accuracy: location.Accuracy.High,
    });

    console.log("latitude:", userLocation.coords.latitude);
    console.log("longitude:", userLocation.coords.longitude);

    const emergencyData = {
      lat: String(userLocation.coords.latitude),
      long: String(userLocation.coords.longitude),
    };

    await dispatch(notifyEmergencyAlert(emergencyData));
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.white]}
    >
      <View style={styles.container}>
        <ImageSet />
        <View style={styles.buttonContainer}>
          <Button
            title="Inform your family"
            color={COLORS.secondary}
            filled
            onPress={sendUserLocation}
            style={{ marginTop: 22, width: "100%" }}
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
  buttonContainer: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 640,
    width: "100%",
  },
});
