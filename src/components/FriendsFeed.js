import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import AppContext from "../../AppContext";
import Review from "./Review";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FRIENDS_REVIEWS } from "../../constants";

const FriendsFeed = ({ navigation }) => {
  const [bookedId, setBookedId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    console.log(bookedId);
    if (isNumeric(bookedId) && !isSixDigits(bookedId)) {
      setErrorMessage("Must be a six-digit number");
    } else {
      setErrorMessage("Invalid Booked ID");
    }
  };
  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };
  const isSixDigits = (value) => {
    return Number(value) % 10000000 === Number(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your friends' reviews</Text>
      <Text style={styles.miniHeader}>Add friends</Text>
      <View
        style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}
      >
        <TouchableOpacity onPress={handleSubmit}>
          <Ionicons
            style={{ marginRight: 5 }}
            name={"add-circle"}
            size={30}
            color={"#307FE2"}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setBookedId(e)}
          value={bookedId}
          placeholder={"  Enter friend's 6-digit Booked ID"}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMsg}>{errorMessage}</Text>
      ) : (
        <></>
      )}
      {FRIENDS_REVIEWS.map((review, index) => {
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
    marginBottom: 10,
  },
  miniHeader: {
    fontSize: 14,
    marginBottom: 15,
  },
  errorMsg: {
    fontSize: 14,
    color: "#d60b0b",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    height: 40,
    width: 300,
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

export default FriendsFeed;
