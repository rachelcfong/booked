import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AppContext from "../../AppContext";
import Review from "../components/Review";
import SwitchSelector from "react-native-switch-selector";
import Ionicons from "react-native-vector-icons/Ionicons";
import ReviewsNearYouFeed from "../components/ReviewsNearYouFeed";
import FriendsFeed from "../components/FriendsFeed";

const Feed = ({ navigation }) => {
  const { reviews } = useContext(AppContext);
  const [currPage, setCurrPage] = useState(0);

  const returnMapIcon = () => {
    if (currPage === 1) {
      return (
        <Ionicons
          style={{ marginRight: 5 }}
          name={"map-outline"}
          size={25}
          color={"#307FE2"}
        />
      );
    } else {
      return (
        <Ionicons
          style={{ marginRight: 5 }}
          name={"map"}
          size={25}
          color={"#307FE2"}
        />
      );
    }
  };

  const returnPersonIcon = () => {
    if (currPage === 0) {
      return (
        <Ionicons
          style={{ marginRight: 5 }}
          name={"people-outline"}
          size={25}
          color={"#307FE2"}
        />
      );
    } else {
      return (
        <Ionicons
          style={{ marginRight: 5 }}
          name={"people"}
          size={25}
          color={"#307FE2"}
        />
      );
    }
  };

  const options = [
    {
      customIcon: returnMapIcon,
      value: "0",
    },
    {
      customIcon: returnPersonIcon,
      value: "1",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "#307FE2",
            borderRadius: 50,
            marginBottom: 20,
          }}
        >
          <SwitchSelector
            backgroundColor={"#F5FAFF"}
            buttonColor={"#FFF"}
            selectedColor={"#307FE2"}
            bold={true}
            height={45}
            options={options}
            textColor={"#BCC5D0"}
            initial={currPage}
            onPress={(value) => {
              setCurrPage(Number(value));
            }}
          />
        </View>
        {currPage === 0 ? <ReviewsNearYouFeed /> : <FriendsFeed />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },
  header: {
    fontSize: 16,
    color: "#1E3F63",
    fontWeight: "bold",
    marginBottom: 20,
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
