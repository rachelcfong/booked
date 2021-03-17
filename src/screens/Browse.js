import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ClearButton from "../components/ClearButton";
import Typography from "../components/Typography";
import VerticalUserCard from "../components/VerticalUserCard";
import HorizontalUserCard from "../components/HorizontalUserCard";
import Tag from "../components/Tag";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppContext from "../../AppContext";
import { INTERPRETERS, TAGS } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Browse = ({ route, navigation }) => {
  // The boolean array below maps to if following tags are set:
  // [minThreeYears, minThreeStars, minFourStars, sameGender]
  const [tagStates, setTagStates] = useState([false, false, false, false]);
  const [interpreters, setInterpreters] = useState([...INTERPRETERS]);
  const { gender } = React.useContext(AppContext);
  const { appointment } = route.params;

  const filterFunctions = [
    (interpreter) => {
      return interpreter.yearsExp >= 3;
    },
    (interpreter) => {
      return interpreter.rating >= 3;
    },
    (interpreter) => {
      return interpreter.rating >= 4;
    },
    (interpreter) => {
      return interpreter.gender === gender;
    },
  ];

  useEffect(() => {
    let interpretersCopy = [...INTERPRETERS];
    // filter interpreters accordingly
    for (let i = 0; i < tagStates.length; i++) {
      if (tagStates[i] === true) {
        interpretersCopy = interpretersCopy.filter(filterFunctions[i]);
      }
    }
    setInterpreters(interpretersCopy);
  }, [tagStates]);

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={{ left: "38%", position: "absolute" }}>
          <Typography text={"Browse"} defaultStyle={true} />
        </View>
        <View style={{ left: 175 }}>
          <ClearButton buttonText="Filter" />
        </View>
      </View>

      {/* Recommended by friends */}
      <View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>Recommended by friends</Text>
        </View>
        <View style={styles.interpreterCaro}>
          <ScrollView horizontal>
            {INTERPRETERS.map((interpreter, index) => {
              return (
                <View style={{ alignSelf: "center" }} key={index}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Interpreter Info", {
                        interpreter: interpreter,
                        appointment: appointment,
                      })
                    }
                  >
                    <VerticalUserCard
                      name={interpreter.name}
                      yearsExp={interpreter.yearsExp}
                      rating={interpreter.rating}
                      numReviews={interpreter.numReviews}
                      imgSource={interpreter.imgSource}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>

        {/* Available interpreters */}
        <View>
          <View style={{ marginLeft: 20, marginBottom: 10 }}>
            <Text style={styles.title}>Available Interpreters</Text>

            {/* Tags*/}
            <View style={styles.tagsContainer}>
              <Ionicons
                style={{ marginRight: 5 }}
                name={"pricetag-outline"}
                size={25}
                color={"#307FE2"}
              />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {TAGS.map((tag, index) => {
                  return (
                    <Tag
                      key={index}
                      label={tag.label}
                      clicked={tagStates[index]}
                      index={index}
                      tagStates={tagStates}
                      setTagStates={setTagStates}
                      setInterpreters={setInterpreters}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>

          {/* Available interpreter cards */}
          <View style={styles.availableInterpreters}>
            <ScrollView>
              {interpreters.map((interpreter, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity>
                      <HorizontalUserCard
                        name={interpreter.name}
                        yearsExp={interpreter.yearsExp}
                        rating={interpreter.rating}
                        numReviews={interpreter.numReviews}
                        imgSource={interpreter.imgSource}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "white",
  },
  topBar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#1E3F63",
  },
  interpreterCaro: {
    backgroundColor: "#F5FAFF",
    height: 240,
    marginBottom: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },
  availableInterpreters: {
    backgroundColor: "#F5FAFF",
    alignItems: "center",
    width: "100%",
    height: 328,
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
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

export default Browse;
