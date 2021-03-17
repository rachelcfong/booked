import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Typography from "../components/Typography";
import DropDownPicker from "react-native-dropdown-picker";
import AppContext from "../../AppContext";
import emptyProfile from "../../assets/empty-profile.png";

const BookingConfirmation = ({ navigation }) => {
  const { email } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Ionicons name={"checkmark-circle"} size={100} color={"#307FE2"} />
      <View style={styles.textContainer}>
        <Text style={styles.blueHeader}>You're all set!</Text>
        <Text
          style={styles.smallText}
        >{`A confirmation email has been sent to ${email}`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonText={"Back to home"}
          onClick={() => {
            navigation.navigate("AuthedHome");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    width: 300,
  },
  buttonContainer: {
    marginTop: 30,
    width: "95%",
    marginLeft: 40,
  },
  blueHeader: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#307FE2",
    marginTop: 30,
  },
  smallText: {
    fontSize: 16,
    marginTop: 30,
    textAlign: "center",
  },
});

export default BookingConfirmation;
