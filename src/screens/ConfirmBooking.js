import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Button from "../components/Button";
import interpreter1 from "../../assets/interpreter1.png";
import blankProPic from "../../assets/blankpropic.png";
import AppointmentCard from "../components/AppointmentCard";
import AppContext from "../../AppContext";

const ConfirmBooking = ({ route, navigation }) => {
  const { appointment, interpreter } = route.params;
  const { appointments, setAppointments } = useContext(AppContext);

  const handleSubmit = () => {
    let apptIndex = appointments.findIndex(
      (appt) => appt.apptId === appointment.apptId
    );
    let newAppts = [...appointments];
    newAppts[apptIndex].interpreter = interpreter.name;
    setAppointments(newAppts);
    navigation.navigate("Booking Confirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Booking</Text>
      <AppointmentCard
        appointment={appointment}
        interpreter={interpreter}
        showButton={false}
      />
      <View style={styles.confirmButton}>
        <Button buttonText={"Confirm"} onClick={handleSubmit} />
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
