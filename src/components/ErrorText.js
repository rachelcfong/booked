import React from "react";
import { Text, StyleSheet } from "react-native";

const ErrorText = ({ text }) => {
  return <Text style={styles.errorText}>{text}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "#d60b0b",
  },
});

export default ErrorText;
