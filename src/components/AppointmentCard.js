import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { INTERPRETERS } from "../../constants";
import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppointmentCard = ({
  navigation,
  appointment,
  interpreter = null,
  showButton = true,
}) => {
  return (
    <View style={showButton ? styles.cardWithButton : styles.cardWithoutButton}>
      <View style={styles.topCardContainer}>
        <View style={styles.topCard}>
          <Text style={styles.h1}>Physical examination</Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Ionicons
              style={{ marginRight: 10, marginTop: 5 }}
              name={"time-outline"}
              size={25}
              color={"#307FE2"}
            />
            <View>
              <Text style={styles.body}>Friday March 5 2021</Text>
              <Text style={styles.body}>Stanford Hospital</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.midCard}>
        <View style={styles.container}>
          <Text style={{ color: "#1E3F63", fontWeight: "bold" }}>
            Interpreter
          </Text>
          <View style={styles.interpreterCard}>
            <View>
              <Image
                style={styles.profileImage}
                source={
                  interpreter
                    ? interpreter.imgSource
                    : INTERPRETERS.find(
                        (interpreter) => interpreter.id === appointment.id
                      ).imgSource
                }
              />
              <Text style={styles.name}>
                {interpreter
                  ? interpreter.name
                  : INTERPRETERS.find(
                      (interpreter) => interpreter.id === appointment.id
                    ).name}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={{ color: "#1E3F63", fontWeight: "bold" }}>Time</Text>
          <View style={styles.timeCard}>
            <Text>Arrive at</Text>
            <Text style={styles.h1}>{appointment.arrivalTime}</Text>
            <Text style={styles.timeCardHeaders}>Starts at</Text>
            <Text style={styles.h1}>{appointment.startTime}</Text>
          </View>
        </View>
      </View>
      {showButton ? (
        <View style={styles.bottomCard}>
          <Button
            buttonText={
              appointment.interpreter ? "Edit booking" : "Book interpreter"
            }
            onClick={() => {
              navigation.navigate("Browse", {
                appointment: appointment,
              });
            }}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  topContainer: {
    width: 250,
    alignSelf: "flex-start",
  },
  cardWithButton: {
    marginTop: 20,
    padding: 10,
    width: 370,
    height: 420,
    backgroundColor: "#F5FAFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    borderRadius: 15,
  },
  cardWithoutButton: {
    marginTop: 20,
    padding: 10,
    width: 370,
    height: 350,
    backgroundColor: "#F5FAFF",
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
    color: "#1E3F63",
  },
  name: {
    marginTop: 5,
  },
  timeCardHeaders: { marginTop: 15 },
});

export default AppointmentCard;
