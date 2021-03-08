import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ClearButton = ({ buttonText, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onClick()}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default ClearButton;
