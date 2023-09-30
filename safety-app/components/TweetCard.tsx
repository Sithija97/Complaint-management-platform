import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { COLORS } from "../constants/colors";

interface TweetCardProps {
  title: string;
  description: string;
  likeCount: number;
  liked: boolean;
  replies: { comment: string }[];
  onLikeToggle: () => void;
  onReply: () => void;
}

const TweetCard: React.FC<TweetCardProps> = ({
  title,
  description,
  likeCount,
  liked,
  replies,
  onLikeToggle,
  onReply,
}) => {
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
        <Text style={styles.tweetText}>{title}</Text>
        <Text style={styles.tweetText}>{description}</Text>

        <View style={styles.replyContainer}>
          <TouchableOpacity onPress={onReply}>
            <Text style={styles.replyText}>Reply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.likeContainer}>
          <TouchableOpacity onPress={onLikeToggle}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"} // Customize the icon name as needed
              size={24} // Customize the icon size as needed
              color={liked ? "red" : COLORS.grey} // Customize the icon color as needed
              style={styles.heartIcon}
            />
          </TouchableOpacity>
          <Text style={styles.likeCount}>{likeCount}</Text>
        </View>
        {replies.length > 0 && (
          <View style={styles.repliesContainer}>
            {replies.map((reply, index) => (
              <View key={index} style={styles.reply}>
                <Text>{reply.comment}</Text>
              </View>
            ))}
          </View>
        )}
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
    marginTop: 5,
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
  repliesContainer: {
    marginTop: 10,
  },
  reply: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default TweetCard;
