import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContext from "../../AppContext";
import Review from "../components/Review";

const Feed = ({ navigation }) => {
  const { reviews } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reviews</Text>
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
    padding: 20,
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

export default Feed;
