import React from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { REVIEWS } from "../../constants";
import blankProPic from "../../assets/blankpropic.png";

const InterpreterReviews = ({ interpreter }) => {
  return (
    <ScrollView>
      {REVIEWS.filter((review) => review.interpreterId === interpreter.id).map(
        (review) => {
          return (
            <View style={styles.reviewContainer}>
              <Image style={styles.profileImage} source={blankProPic} />
              <Text>{review.review}</Text>
            </View>
          );
        }
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    color: "#1E3F63",
  },
  reviewContainer: {
    height: 90,
    width: 380,
    flexDirection: "row",
    backgroundColor: "red",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 12,
  },
});

export default InterpreterReviews;
