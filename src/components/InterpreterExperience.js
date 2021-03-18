import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const InterpreterExperience = ({ interpreter }) => {
  return (
    <ScrollView>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <Ionicons
          style={{ marginRight: 5 }}
          name={"checkmark"}
          size={30}
          color={"#64BC26"}
        />
        <Text
          style={styles.text}
        >{`${interpreter.numAppts} appointments`}</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <Ionicons
          style={{ marginRight: 5 }}
          name={"checkmark"}
          size={30}
          color={"#64BC26"}
        />
        <Text style={styles.text}>{`${interpreter.numPatients} patients`}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E3F63",
  },
});

export default InterpreterExperience;
