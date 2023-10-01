import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import { Button, ImageSet } from "../components";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { Formik } from "formik";
import { IUpdateData } from "../models";
import { update } from "../store/auth/authSlice";

export const Profile = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.user);

  const initialState: IUpdateData = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    fullName: user?.fullName || "",
    address: user?.address || "",
    contactNumber: user?.contactNumber || "",
  };

  const handleSubmit = (values: any, resetForm: any) => {
    const { firstName, lastName, fullName, address, contactNumber } = values;
    const updateUserData = {
      firstName,
      lastName,
      fullName,
      address,
      contactNumber,
    };
    dispatch(update(updateUserData));
  };

  useEffect(() => {}, [dispatch]);

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

        <Formik
          initialValues={initialState}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values, resetForm);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your first name"
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your last name"
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Address:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Contact No:</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="phone-pad"
                  placeholder="Enter your contact No"
                  onChangeText={handleChange("contactNumber")}
                  onBlur={handleBlur("contactNumber")}
                  value={values.contactNumber}
                />
              </View>

              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.updateButtonText}>Update</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    height: 40,
  },
  updateButton: {
    backgroundColor: COLORS.secondary, // Blue color for the button
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end", // Position the button to the right side
  },
  updateButtonText: {
    color: COLORS.white, // White color for the button text
    fontWeight: "bold",
    fontSize: 16,
  },
  // Add more styles as needed for additional input fields or buttons
});

export default Profile;
