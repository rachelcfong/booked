import React from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { REVIEWS } from "../../constants";
import blankProPic from "../../assets/blankpropic.png";

const InterpreterReviews = ({ interpreter }) => {
  return (
    <ScrollView>
      {REVIEWS.filter((review) => review.interpreterId === interpreter.id).map(
        (review, index) => {
          return (
            <View key={index}>
              <View style={styles.reviewContainer}>
                <Image style={styles.profileImage} source={blankProPic} />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.miniHeader}>{review.user}</Text>
                    <Text style={styles.lightText}>{review.time}</Text>
                  </View>
                  <View
                    style={{
                      width: 290,
                      marginTop: 8,
                    }}
                  >
                    <Text>{review.review}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
          );
        }
      )}
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

export default InterpreterReviews;
