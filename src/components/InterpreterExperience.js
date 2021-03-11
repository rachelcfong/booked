import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

const InterpreterExperience = ({ interpreter }) => {
  return (
    <ScrollView>
      <Text style={styles.text}>{`${interpreter.numAppts} appointments`}</Text>
      <Text style={styles.text}>{`${interpreter.numPatients} patients`}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    color: "#1E3F63",
  },
});

export default InterpreterExperience;
