import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },
  header: {
    fontSize: 40,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 50,
    width: 300,
    marginTop: 15,
  },
});

export default Feed;
