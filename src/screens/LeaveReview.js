import React from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { REVIEWS } from "../../constants";
import blankProPic from "../../assets/blankpropic.png";

const LeaveReview = ({}) => {
  return (
    <View>
      <Text>Leave review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    color: "#1E3F63",
  },
  reviewContainer: {
    height: 90,
    width: 370,
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 12,
  },
  line: {
    height: 1,
    width: 350,
    backgroundColor: "#E8E8E8",
    marginBottom: 10,
  },
  miniHeader: {
    fontWeight: "bold",
    color: "#1E3F63",
  },
  lightText: {
    color: "#BDBDBD",
  },
});

export default LeaveReview;
