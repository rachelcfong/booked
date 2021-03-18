import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import AppContext from "../../AppContext";
import interpreter1 from "../../assets/interpreter1.png";
import blankProPic from "../../assets/blankpropic.png";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import TextField from "../components/TextField";
import ErrorText from "../components/ErrorText";
import Typography from "../components/Typography";
import { PAST_APPOINTMENTS } from "../../constants";
import VerticalPastInterpreterCard from "../components/VerticalPastInterpreterCard";

const Dashboard = ({ navigation }) => {
  const {
    email,
    password,
    firstName,
    lastName,
    gender,
    preferredLanguage,
    appointments,
  } = React.useContext(AppContext);
  // const APPOINTMENTS = [
  //   { interpreter: "Gabrielle S", arrivalTime: "8.45am", startTime: "9:00am" },
  //   { interpreter: "", arrivalTime: "1:45pm", startTime: "2:00pm" },
  // ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Typography
            text={`Good morning, ${firstName}! ☀️ `}
            defaultStyle={true}
          />
          <Text style={styles.h2}>Upcoming appointments</Text>
        </View>

        <View style={{ height: 460 }}>
          <ScrollView horizontal pagingEnabled>
            {appointments.map((appointment, index) => {
              return (
                <View style={styles.card} key={index}>
                  <View style={styles.topCard}>
                    <Text style={styles.h1}>Physical examination</Text>
                    <View style={{ marginTop: 10 }}>
                      <Text style={styles.body}>Friday March 5 2021</Text>
                      <Text style={styles.body}>Stanford Hospital</Text>
                    </View>
                  </View>
                  <View style={styles.midCard}>
                    <View style={styles.container}>
                      <Text>Interpreter</Text>
                      <View style={styles.interpreterCard}>
                        <View>
                          <Image
                            style={styles.profileImage}
                            source={
                              appointment.interpreter !== ""
                                ? interpreter1
                                : blankProPic
                            }
                          />
                          <Text style={styles.name}>
                            {appointment.interpreter}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.container}>
                      <Text>Time</Text>
                      <View style={styles.timeCard}>
                        <Text>Arrive at</Text>
                        <Text style={styles.h1}>{appointment.arrivalTime}</Text>
                        <Text style={styles.timeCardHeaders}>Starts at</Text>
                        <Text style={styles.h1}>{appointment.startTime}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bottomCard}>
                    <Button
                      buttonText={
                        appointment.interpreter
                          ? "Edit booking"
                          : "Book interpreter"
                      }
                      onClick={() => {
                        navigation.navigate("Browse", {
                          appointment: appointment,
                        });
                      }}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        {/* Bottom caroseul */}
        <View>
          <Text style={styles.miniTitles}>Past interpreters</Text>
          <View style={styles.pastInterpretersContainer}>
            <ScrollView horizontal>
              {PAST_APPOINTMENTS.map((appointment, index) => {
                return (
                  <VerticalPastInterpreterCard
                    navigation={navigation}
                    appointment={appointment}
                    key={index}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  topContainer: {
    width: 250,
    marginLeft: 30,
    alignSelf: "flex-start",
  },
  card: {
    marginTop: 20,
    marginLeft: 20,
    padding: 10,
    width: 370,
    height: 420,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    borderRadius: 15,
  },
  interpreterCard: {
    margin: 10,
    padding: 12,
    width: 140,
    height: 160,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
  },
  timeCard: {
    margin: 10,
    padding: 12,
    width: 140,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
  },
  pastInterpretersContainer: {
    backgroundColor: "#F5FAFF",
    height: 260,
    marginTop: 10,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  topCard: {
    marginTop: 10,
    marginLeft: 10,
    height: 90,
  },
  midCard: {
    height: 200,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 50,
    width: 300,
    marginTop: 20,
  },
  miniTitles: {
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    color: "#1E3F63",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3F63",
  },
  h2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E3F63",
  },
  body: {
    marginTop: 5,
    color: "#767676",
  },
  name: {
    marginTop: 5,
  },
  timeCardHeaders: { marginTop: 15 },
});

export default Dashboard;
