import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import { ImageSetTwo } from "../components";
import TweetCard from "../components/TweetCard";

export const Community = ({ navigation }: any) => {
  const [titleText, setTitleText] = useState<string>("");
  const [descriptionText, setDescriptionText] = useState<string>("");
  const [tweets, setTweets] = useState<
    {
      title: string;
      description: string;
      likeCount: number;
      liked: boolean;
      replies: { comment: string }[];
    }[]
  >([]);

  const handleAddTweet = () => {
    if (titleText && descriptionText) {
      setTweets([
        {
          title: titleText,
          description: descriptionText,
          likeCount: 0,
          liked: false,
          replies: [],
        },
        ...tweets,
      ]);
      setTitleText("");
      setDescriptionText("");
    }
  };

  const handleLikeToggle = (index: number) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].liked = !updatedTweets[index].liked;
    if (updatedTweets[index].liked) {
      updatedTweets[index].likeCount += 1;
    } else {
      updatedTweets[index].likeCount -= 1;
    }
    setTweets(updatedTweets);
  };

  const [replyText, setReplyText] = useState<string>("");
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);

  const handleReply = (postId: number) => {
    setCurrentPostId(postId);
    setShowReplyInput(true);
  };

  const handlePostComment = () => {
    if (currentPostId !== null && replyText) {
      const updatedTweets = [...tweets];
      const index = currentPostId - 1;
      updatedTweets[index].replies.push({ comment: replyText });
      setTweets(updatedTweets);
      setCurrentPostId(null);
      setReplyText("");
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.white]}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={titleText}
          onChangeText={(text) => setTitleText(text)}
          multiline={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={descriptionText}
          onChangeText={(text) => setDescriptionText(text)}
          multiline={true}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTweet}>
          <Text style={styles.addButtonText}>Tweet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <ImageSetTwo />
        <FlatList
          data={tweets}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.tweetContainer}>
              <TweetCard
                title={item.title}
                description={item.description}
                likeCount={item.likeCount}
                liked={item.liked}
                replies={item.replies}
                onLikeToggle={() => handleLikeToggle(index)}
                onReply={() => handleReply(index + 1)}
              />
              {showReplyInput && currentPostId === index + 1 && (
                <View style={styles.replyInputContainer}>
                  <TextInput
                    style={styles.replyInput}
                    placeholder="Add a reply..."
                    value={replyText}
                    onChangeText={(text) => setReplyText(text)}
                  />
                  <TouchableOpacity
                    style={styles.replyButton}
                    onPress={handlePostComment}
                  >
                    <Text style={styles.replyButtonText}>Post</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 22,
    elevation: 5,
  },
  input: {
    marginBottom: 10,
  },
  addButton: {
    width: 100,
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 250,
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
  replyInputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  replyInput: {
    flex: 1,
  },
  replyButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  replyButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
