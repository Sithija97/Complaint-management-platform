import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import { Button, ImageSet } from "../components";
import { Ionicons } from "@expo/vector-icons";
import TweetCard from "../components/TweetCard";

export const Community = ({ navigation }: any) => {
  const [inputText, setInputText] = useState<string>("");
  const [tweets, setTweets] = useState<{ text: string; liked: boolean }[]>([]);

  const handleAddTweet = () => {
    if (inputText) {
      setTweets([{ text: inputText, liked: false }, ...tweets]);
      setInputText("");
    }
  };

  const handleLikeToggle = (index: number) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].liked = !updatedTweets[index].liked;
    setTweets(updatedTweets);
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.white]}
    >
      <View style={styles.container}>
        <ImageSet />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What's happening?"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTweet}>
          <Text style={styles.addButtonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tweets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.tweetContainer}>
            <TweetCard />
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 22,
    elevation: 5,
  },
  input: {
    flex: 1,
  },
  addButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tweetContainer: {
    marginHorizontal: 22,
  },
  tweetText: {
    fontSize: 16,
  },
  likeButton: {
    marginLeft: 10,
  },
});
