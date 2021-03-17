import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { INTERPRETERS } from "../../constants";
import StarRating from "react-native-star-rating";

const Review = ({ review }) => {
  const interpreter = INTERPRETERS.find(
    (interpreter) => interpreter.id === review.id
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBorder}></View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.boldText}>{review.user}</Text>
          <Text style={styles.regText}> booked </Text>
          <Text style={styles.boldText}>{interpreter.name}</Text>
        </View>
        <View>
          <Text style={styles.grayText}>{review.time}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{review.review}</Text>
      <View style={{ width: 90, marginTop: 5, marginBottom: 15 }}>
        <StarRating
          disabled={true}
          starSize={17}
          maxStars={5}
          rating={3}
          fullStarColor={"#1E3F63"}
          emptyStarColor={"#1E3F63"}
          halfStarEnabled={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     height: 90,
  //   },
  topBorder: {
    height: 2,
    width: 380,
    backgroundColor: "#E8E8E8",
    alignSelf: "center",
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3F63",
  },
  regText: {
    fontSize: 16,
    color: "#1E3F63",
  },
  grayText: {
    fontSize: 14,
    color: "#BDBDBD",
  },
  reviewText: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default Review;
