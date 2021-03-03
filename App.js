import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import AppContext from "./AppContext";
import UserDashboard from "./src/screens/UserDashboard";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const setEmail = ({ email }) => setEmail(email);
  // const setEmail = ({ email }) => setEmail(email);

  return (
    <AppContext.Provider
      value={{ email: email, password: password, setEmail: setEmail, setPassword: setPassword }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserDashboard" component={UserDashboard} />
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
