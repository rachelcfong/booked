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
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feed from "./Feed";

//import BottomNavigationBar from "../components/BottomNavigationBar";
import Dashboard from "./Dashboard";

const AuthedHome = ({ navigation }) => {
  const { email, password, firstName, lastName, gender, preferredLanguage } = React.useContext(
    AppContext
  );
  const APPOINTMENTS = [
    { interpreter: "Gabrielle S", arrivalTime: "8.45am", startTime: "9:00am" },
    { interpreter: "Rachel F", arrivalTime: "1:45pm", startTime: "2:00pm" },
  ];
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Dashboard") {
              iconName = focused ? "ios-home-sharp" : "ios-home-outline";
            } else if (route.name === "Feed") {
              iconName = focused ? "ios-star" : "star-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </>
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
    width: 380,
    height: 425,
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
    height: 100,
    //backgroundColor: "gray",
  },
  midCard: {
    height: 200,
    //backgroundColor: "red",
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
    //alignSelf: "flex-start",
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

export default AuthedHome;
