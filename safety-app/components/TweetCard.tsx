import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { COLORS } from "../constants/colors";

interface IProps {}

const TweetCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.ibb.co/4pDNDk1/avatar.png" }}
        style={styles.profileImage}
      />
      <View style={styles.tweetContent}>
        <View style={styles.header}>
          <Text style={styles.username}>Sithija Shehara</Text>
          <Text style={styles.handle}>@sithija</Text>
          <Text style={styles.timeAgo}>5 mins ago</Text>
        </View>
        <Text style={styles.tweetText}>Hello World</Text>

        <View style={styles.likeContainer}>
          <Ionicons
            onPress={() => {}}
            name="heart-outline" // Customize the icon name as needed
            size={24} // Customize the icon size as needed
            color="red" // Customize the icon color as needed
            style={styles.heartIcon}
          />
          <Text style={styles.likeCount}>12</Text>
        </View>
        <View style={styles.replyContainer}>
          <Text style={styles.replyText}>Reply</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tweetContent: {
    flex: 1,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  handle: {
    color: "#657786",
    marginLeft: 5,
  },
  timeAgo: {
    color: "#657786",
    marginLeft: 5,
  },
  tweetText: {
    marginTop: 5,
    fontSize: 16,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  replyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  replyText: { color: "gray", fontSize: 13 },
  heartIcon: {
    position: "absolute",
    bottom: 5,
    right: 10,
  },
  likeCount: {
    position: "absolute",
    bottom: 5,
    right: -5,
    color: COLORS.grey,
    fontSize: 12,
  },
});

export default TweetCard;
