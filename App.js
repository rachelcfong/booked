import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import AppContext from "./AppContext";
import AuthedHome from "./src/screens/AuthedHome";
import SignUpEmail from "./src/screens/SignUpEmail";
import Welcome from "./src/screens/Welcome";
import Browse from "./src/screens/Browse";
import InterpreterInfo from "./src/screens/InterpreterInfo";
import ConfirmBooking from "./src/screens/ConfirmBooking";
import BookingConfirmation from "./src/screens/BookingConfirmation";
import LeaveReview from "./src/screens/LeaveReview";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [healthcareProvider, setHealthcareProvider] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");

  return (
    <AppContext.Provider
      value={{
        email: email,
        password: password,
        setEmail: setEmail,
        setPassword: setPassword,
        firstName: firstName,
        setFirstName: setFirstName,
        lastName: lastName,
        setLastName: setLastName,
        address: address,
        setAddress: setAddress,
        gender: gender,
        setGender: setGender,
        healthcareProvider: healthcareProvider,
        setHealthcareProvider: setHealthcareProvider,
        preferredLanguage: preferredLanguage,
        setPreferredLanguage: setPreferredLanguage,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AuthedHome" component={AuthedHome} />
          <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Browse" component={Browse} />
          <Stack.Screen name="Interpreter Info" component={InterpreterInfo} />
          <Stack.Screen name="Confirm Booking" component={ConfirmBooking} />
          <Stack.Screen
            name="Booking Confirmation"
            component={BookingConfirmation}
          />
          <Stack.Screen name="Leave a review" component={LeaveReview} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
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

export default App;
