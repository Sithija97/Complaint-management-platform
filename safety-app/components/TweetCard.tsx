import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface IProps {
  username: string;
  handle: string;
  timeAgo: string;
  tweetText: string;
  profileImage: string;
}

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
});

export default TweetCard;
