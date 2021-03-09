import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import StarRating from "react-native-star-rating";

const HorizontalUserCard = ({ name, yearsExp, rating, numReviews, imgSource }) => {
  const image = require("../../assets/rachel.png");
  return (
    <View style={styles.card}>
      <Image style={styles.profileImage} source={image} />
      <View style={styles.cardDetails}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.experience}>{yearsExp + " yrs of experience"}</Text>
        <View style={{ alignItems: "flex-end" }} flexDirection="row">
          <StarRating
            disabled={true}
            starSize={17}
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
    height: 115,
    width: 370,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardDetails: {
    alignSelf: "center",
    marginLeft: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  profileImage: {
    width: 95,
    height: 95,
    marginLeft: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 10,
  },
  experience: {
    fontSize: 12,
    marginBottom: 8,
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

export default HorizontalUserCard;
