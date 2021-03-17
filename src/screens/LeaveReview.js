import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import AppointmentCard from "../components/AppointmentCard";
import StarRating from "react-native-star-rating";
import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import RadioButtonRN from "radio-buttons-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppContext from "../../AppContext";

const LeaveReview = ({ route, navigation }) => {
  const { appointment } = route.params;
  const { reviews, setReviews } = useContext(AppContext);

  const [rating, setRating] = useState(0);
  const [wouldRecc, setWouldRecc] = useState(false);
  const [onTime, setOnTime] = useState("");
  const [doBetter, setDoBetter] = useState("");
  const [review, setReview] = useState("");
  const [report, setReport] = useState(false);
  const [reportText, setReportText] = useState("");

  let formComplete =
    onTime !== "" && review !== "" && (report ? reportText !== "" : true);

  const times = [
    {
      label: "On-time",
    },
    {
      label: "5 min late",
    },
    {
      label: "10 min late",
    },
    {
      label: ">10 min late",
    },
    {
      label: "Didn't show up",
    },
  ];

  const improvements = [
    {
      label: "Communication",
    },
    {
      label: "Politeness",
    },
    {
      label: "Arrival time",
    },
    {
      label: "Sign Language Fluency",
    },
  ];

  const handleSubmit = () => {
    const completeReview = {
      rating: rating,
      wouldRecc: wouldRecc,
      onTime: onTime,
      doBetter: doBetter,
      review: review,
      report: report,
      reportText: reportText,
    };
    let newReviews = [...reviews, completeReview];
    setReviews(newReviews);
    navigation.navigate("Feed");
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <KeyboardAvoidingView
        contentContainerStyle={{ position: "relative" }}
        behavior={"padding"}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Review</Text>
          <View>
            <Text style={styles.text}>
              Let fellow patients in your community know about your experience.
            </Text>
            <Text style={styles.textBold}>You are reviewing:</Text>
            <AppointmentCard appointment={appointment} showButton={false} />
            <View style={{ width: 350, marginTop: 20 }}>
              <Text style={styles.h4}>Overall experience</Text>
              <View style={{ width: 190, marginBottom: 20 }}>
                <StarRating
                  starSize={24}
                  maxStars={5}
                  rating={rating}
                  selectedStar={(rating) => {
                    setRating(rating);
                  }}
                  fullStarColor={"#307FE2"}
                  emptyStarColor={"#307FE2"}
                  halfStarEnabled={true}
                />
              </View>

              <Text style={styles.h4}>
                Would you recommend this interpreter to a friend?
              </Text>
              {wouldRecc ? (
                <TouchableOpacity onPress={() => setWouldRecc(!wouldRecc)}>
                  <Ionicons name={"checkbox"} size={25} color={"#666666"} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setWouldRecc(!wouldRecc)}>
                  <Ionicons
                    name={"checkbox-outline"}
                    size={25}
                    color={"#666666"}
                  />
                </TouchableOpacity>
              )}
              <Text style={styles.h4}>Was the interpreter on-time?</Text>
              <View style={styles.arrivalTimeContainer}>
                <RadioButtonRN
                  style={styles.radioButton}
                  data={times}
                  selectedBtn={(time) => setOnTime(time)}
                  textStyle={{ fontSize: 12, marginLeft: 10 }}
                  textColor="black"
                  circleSize={12}
                  activeColor={"#307FE2"}
                />
              </View>
              <Text style={styles.h4}>
                What could the interpreter do better?
              </Text>
              <View style={styles.improveContainer}>
                <RadioButtonRN
                  style={styles.radioButton}
                  data={improvements}
                  selectedBtn={(improvement) => setDoBetter(improvement)}
                  textStyle={{ fontSize: 12, marginLeft: 10 }}
                  textColor="black"
                  circleSize={12}
                  activeColor={"#307FE2"}
                />
              </View>
              <Text style={styles.h4}>Elaborate on your experience here:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setReview}
                value={review}
                multiline={true}
              />
              <Text style={styles.h4}>
                The following will not be shared publicly.{" "}
              </Text>
              <View style={styles.reportContainer}>
                {report ? (
                  <TouchableOpacity onPress={() => setReport(!report)}>
                    <Ionicons name={"checkbox"} size={25} color={"#666666"} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setReport(!report)}>
                    <Ionicons
                      name={"checkbox-outline"}
                      size={25}
                      color={"#666666"}
                    />
                  </TouchableOpacity>
                )}
                <Text style={styles.grayText}>
                  I would like to report this interpreter for inappropriate
                  behavior
                </Text>
              </View>
              {report ? (
                <>
                  <Text style={styles.navyText}>
                    Please elaborate below. Your message will be shared directly
                    with the interpreters’ agency.
                  </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={setReportText}
                    value={reportText}
                    multiline={true}
                  />
                </>
              ) : (
                <></>
              )}
            </View>
          </View>
          <View style={{ width: "90%", height: 250, marginTop: 10 }}>
            <Button
              disabled={!formComplete}
              buttonText={"Submit"}
              onClick={handleSubmit}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3F63",
    marginTop: 22,
  },
  text: {
    fontSize: 14,
    marginTop: 20,
  },
  textBold: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  h4: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3F63",
  },
  grayText: {
    color: "#666666",
    marginLeft: 10,
  },
  radioButton: {
    height: 50,
    width: 300,
  },
  arrivalTimeContainer: {
    height: 285,
  },
  improveContainer: {
    height: 230,
  },
  reviewContainer: {
    height: 90,
    width: 370,
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  reportContainer: { flexDirection: "row", width: 340 },
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
  navyText: {
    color: "#1E3F63",
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 144,
  },
});

export default LeaveReview;
