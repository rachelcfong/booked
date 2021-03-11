import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ disabled = false, buttonText, onClick }) => {
  return (
    <TouchableOpacity
      style={disabled ? styles.disabled : styles.button}
      disabled={disabled}
      onPress={() => onClick()}
    >
      <Text style={disabled ? styles.disabledText : styles.text}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
  },
  disabledText: { fontSize: 18, color: "#BDBDBD" },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307FE2",
    padding: 10,
    height: 50,
    width: "90%",
    borderRadius: 50,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
  },
  disabled: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    padding: 10,
    height: 50,
    borderRadius: 50,
    marginTop: 15,
  },
});

export default Button;
