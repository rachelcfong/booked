import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ buttonText, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onClick()}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307FE2",
    padding: 10,
    height: 50,
    width: 370,
    borderRadius: 50,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
  },
});

export default Button;
