import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import { ContactCard, ImageSet } from "../components";

interface IContactPerson {
  contactPersonsName: string;
  contactNumber: string;
  email: string;
}

const initialState = {
  contactPersonsName: "",
  contactNumber: "",
  email: "",
};

export const Contacts = ({ navigation }: any) => {
  const [contactPerson, setContactPerson] =
    useState<IContactPerson>(initialState);
  const [contactsGroup, setContactsGroup] = useState<IContactPerson[]>([]);

  const handleAddTask = () => {
    if (
      contactPerson.contactPersonsName &&
      contactPerson.contactNumber &&
      contactPerson.email
    ) {
      setContactsGroup([...contactsGroup, contactPerson]);

      setContactPerson({
        contactPersonsName: "",
        contactNumber: "",
        email: "",
      });

      Keyboard.dismiss();
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.white]}
    >
      <View style={styles.container}>
        <ImageSet />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {contactsGroup.map((item, index) => {
                return (
                  // <TouchableOpacity key={index}>
                  <ContactCard item={item} />
                  // </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <View>
            <TextInput
              style={styles.input}
              placeholder={"Add contact name"}
              value={contactPerson.contactPersonsName}
              onChangeText={(text) =>
                setContactPerson({
                  ...contactPerson,
                  contactPersonsName: text,
                })
              }
            />
            <TextInput
              style={styles.input}
              placeholder={"Add mobile number"}
              value={contactPerson.contactNumber}
              onChangeText={(text) =>
                setContactPerson({
                  ...contactPerson,
                  contactNumber: text,
                })
              }
            />
            <TextInput
              style={styles.input}
              placeholder={"Add email address"}
              value={contactPerson.email}
              onChangeText={(text) =>
                setContactPerson({
                  ...contactPerson,
                  email: text,
                })
              }
            />
          </View>

          <TouchableOpacity onPress={handleAddTask}>
            <View style={styles.addWrapper}>
              <Ionicons name="add-outline" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: COLORS.black,
    borderWidth: 1,
    width: 290,
    marginBottom: 5,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.secondary,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 83,
  },
});
