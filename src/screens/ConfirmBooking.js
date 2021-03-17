import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Button from "../components/Button";
import interpreter1 from "../../assets/interpreter1.png";
import blankProPic from "../../assets/blankpropic.png";

const ConfirmBooking = ({ route, navigation }) => {
  const { appointment } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Booking</Text>
      <View style={styles.card}>
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
                    appointment.interpreter !== "" ? interpreter1 : blankProPic
                  }
                />
                <Text style={styles.name}>{appointment.interpreter}</Text>
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
      </View>
      <View style={styles.confirmButton}>
        <Button
          buttonText={"Confirm"}
          onClick={() => navigation.navigate("Booking Confirmation")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  card: {
    marginTop: 40,
    padding: 10,
    width: 370,
    height: 350,
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
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3F63",
    marginTop: 22,
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
  confirmButton: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    marginLeft: 37,
    marginBottom: 40,
  },
});

export default ConfirmBooking;
