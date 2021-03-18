import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import StarRating from "react-native-star-rating";

const VerticalUserCard = ({
  name,
  yearsExp,
  rating,
  numReviews,
  imgSource,
}) => {
  const image = require("../../assets/rachel.png");
  return (
    <View style={styles.card}>
      <Image style={styles.profileImage} source={imgSource} />
      <View style={styles.bottomCard}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.experience}>{yearsExp + " yrs of experience"}</Text>
        <View style={{ alignItems: "flex-end" }} flexDirection="row">
          <StarRating
            disabled={true}
            starSize={14}
            maxStars={5}
            rating={rating}
            fullStarColor={"#307FE2"}
            emptyStarColor={"#307FE2"}
            halfStarEnabled={true}
          />
          <Text style={styles.reviews}>{" (" + numReviews + ")"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 140,
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 8,
    paddingTop: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bottomCard: {
    alignSelf: "flex-start",
    marginLeft: 15,
    marginTop: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    marginBottom: 4,
  },
  experience: {
    fontSize: 11,
    marginBottom: 4,
  },
  reviews: {
    fontSize: 12,
    color: "#1E3F63",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#307FE2",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 40,
    width: 370,
    borderRadius: 50,
    marginTop: 15,
  },
});

export default VerticalUserCard;
