import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContext from "../../AppContext";
import Review from "./Review";
import Ionicons from "react-native-vector-icons/Ionicons";

const ReviewsNearYou = ({ navigation }) => {
  const { reviews } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reviews near you</Text>
      {reviews.map((review, index) => {
        return (
          <View key={index}>
            <Review review={review} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },
  header: {
    fontSize: 16,
    color: "#1E3F63",
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 50,
    width: 300,
    marginTop: 15,
  },
});

export default ReviewsNearYou;
