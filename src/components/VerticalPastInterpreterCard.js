import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { INTERPRETERS } from "../../constants";

const VerticalPastInterpreterCard = ({ appointment, navigation }) => {
  const interpreter = INTERPRETERS.find(
    (interpreter) => interpreter.id === appointment.id
  );

  if (!appointment.hasReview) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Leave a review", { appointment: appointment });
        }}
      >
        <View style={styles.card}>
          <Image style={styles.profileImage} source={interpreter.imgSource} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{interpreter.name}</Text>
            <Text style={styles.name}>{`Seen on ${appointment.date}`}</Text>
          </View>
          {!appointment.hasReview ? (
            <View style={styles.filledBottomContainer}>
              <Text style={styles.leaveReview}>Leave a review</Text>
            </View>
          ) : (
            <View style={styles.emptyBottomContainer}></View>
          )}
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.card}>
        <Image style={styles.profileImage} source={interpreter.imgSource} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{interpreter.name}</Text>
          <Text style={styles.name}>{`Seen on ${appointment.date}`}</Text>
        </View>
        {!appointment.hasReview ? (
          <View style={styles.filledBottomContainer}>
            <Text style={styles.leaveReview}>Leave a review</Text>
          </View>
        ) : (
          <View style={styles.emptyBottomContainer}></View>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: 140,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
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
  textContainer: {
    alignSelf: "flex-start",
    marginLeft: 15,
    marginTop: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  filledBottomContainer: {
    height: 30,
    width: "100%",
    marginTop: 10,
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#307FE2",
    justifyContent: "center",
  },
  emptyBottomContainer: {
    height: 30,
    width: "100%",
    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  leaveReview: {
    fontSize: 12,
    color: "white",
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

export default VerticalPastInterpreterCard;
