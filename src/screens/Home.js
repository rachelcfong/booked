import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import backgroundImage from "../../assets/homebackground.png";
import backgroundGradient from "../../assets/backgroundgradient.png";
import bookedLogo from "../../assets/bookedlogo.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          Find trusted interpreters for health-related appointments
        </Text>
      </View>
      <Image style={styles.logo} source={bookedLogo} />
      <Image style={styles.backgroundImage} source={backgroundImage} />
      <View style={styles.bottomContainer}>
        <Button buttonText="Login" onClick={() => navigation.navigate("Login")} />
        <ClearButton buttonText="Sign up" onClick={() => navigation.navigate("SignUpEmail")} />
      </View>
      <View style={styles.backgroundGradient}>
        <Image style={styles.backgroundGradient} source={backgroundGradient} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: { zIndex: -1 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backgroundGradient: { zIndex: -10 },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    bottom: 300,
    left: 15,
  },
  logo: {
    position: "absolute",
    top: 120,
  },
  subtitleContainer: {
    position: "absolute",
    zIndex: 10,
    width: 300,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },
  subtitle: {
    marginTop: 400,
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    color: "#307FE2",
  },
});

export default Home;
