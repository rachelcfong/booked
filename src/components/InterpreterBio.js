import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

const InterpreterBio = ({ interpreter }) => {
  return (
    <ScrollView>
      <Text style={styles.headerText}>Work Location</Text>
      <Text style={styles.text}>{`${interpreter.workLocation} `}</Text>
      <Text style={styles.headerText}>Sign Language(s)</Text>
      <Text style={styles.text}>{`${interpreter.signLanguages} `}</Text>
      <Text style={styles.headerText}>About</Text>
      <Text style={styles.text}>{`${interpreter.about} `}</Text>
      <Text style={styles.headerText}>Certification</Text>
      <Text style={styles.text}>{`${interpreter.certification} `}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#1E3F63",
  },
  text: {
    fontSize: 15,
    marginBottom: 27,
  },
});

export default InterpreterBio;
