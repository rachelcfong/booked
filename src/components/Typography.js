import React from "react";
import { Text, StyleSheet } from "react-native";

const Typography = ({ text, defaultStyle = false }) => {
  return <Text style={defaultStyle ? styles.h1 : styles.other}>{text}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3F63",
    marginTop: 30,
    marginBottom: 20,
  },
});

export default Typography;
