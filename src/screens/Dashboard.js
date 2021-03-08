import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AppContext from "../../AppContext";
import interpreter1 from "../../assets/interpreter1.png";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";

const Dashboard = ({ navigation }) => {
  const { email, password, firstName, lastName, gender, preferredLanguage } = React.useContext(
    AppContext
  );
  const APPOINTMENTS = [
    { interpreter: "Gabrielle S", arrivalTime: "8.45am", startTime: "9:00am" },
    { interpreter: "", arrivalTime: "1:45pm", startTime: "2:00pm" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good morning, {firstName}!</Text>
      <Text style={styles.h2}>Upcoming appointments</Text>
      <ScrollView snapToAlignment horizontal pagingEnabled>
        {APPOINTMENTS.map((appointment, index) => {
          return (
            <View style={styles.card} key={index}>
              <View style={styles.topCard}>
                <Text style={styles.h1}>Physical examination</Text>
                <Text style={styles.body}>Friday March 5 2021</Text>
                <Text style={styles.body}>Stanford Hospital</Text>
              </View>
              <View style={styles.midCard}>
                <View style={styles.container}>
                  <Text>Interpreter</Text>
                  <View style={styles.interpreterCard}>
                    {appointment.interpreter ? (
                      <View>
                        <Image style={styles.profileImage} source={interpreter1} />
                        <Text style={styles.name}>{appointment.interpreter}</Text>
                      </View>
                    ) : (
                      <View></View>
                    )}
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
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text>{appointment.interpreter ? "Edit booking" : "Book interpreter"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    marginTop: 20,
    marginLeft: 20,
    padding: 10,
    width: 350,
    height: 410,
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
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  h2: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 210,
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
