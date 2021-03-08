import React from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

const TextField = ({ value, placeholder, onTextChange, hideInput = false }) => {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={(text) => onTextChange(text)}
      placeholder={placeholder}
      secureTextEntry={hideInput ? true : false}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
  },
  textInput: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
});

export default TextField;
