import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const BottomNavigationBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconTitle}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 75,
    width: 700,
    backgroundColor: "red",
    //justifyContent: "center",
    //position: "relative",
  },
  iconTitle: {
    fontSize: 30,
  },
});

export default BottomNavigationBar;
