import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IComplaint, IEmergency } from "../models";

interface IProps {
  type: "complaint" | "emergency";
  complaint?: IComplaint;
  emergency?: IEmergency;
}

export const HistoryCard = ({ type, complaint, emergency }: IProps) => {
  return (
    <View style={styles.card}>
      {type === "complaint" ? (
        <>
          <Text style={styles.title}>{complaint?.title}</Text>
          <Text
            style={styles.category}
          >{`Category: ${complaint?.category}`}</Text>
          <Text
            style={styles.createdAt}
          >{`Created At: ${complaint?.createdAt}`}</Text>
          <Text
            style={styles.updatedAt}
          >{`Updated At: ${complaint?.updatedAt}`}</Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>Emergency Alert</Text>
          <Text
            style={styles.description}
          >{`faced an emergency situation on ${emergency?.createdAt}`}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  category: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  createdAt: {
    fontSize: 14,
    color: "gray",
  },
  updatedAt: {
    fontSize: 14,
    color: "gray",
  },
});
