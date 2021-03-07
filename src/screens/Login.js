import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import App from "../../App";
import AppContext from "../../AppContext";

const Login = ({ navigation }) => {
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setEmail(email);
    setPassword(password);
    navigation.navigate("AuthedHome");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder={"Email"}
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder={"Password"}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetPassword}>
          <Text>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  header: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  textInput: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 50,
    width: 300,
    marginTop: 60,
    borderRadius: 8,
  },
  forgetPassword: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 50,
    width: 300,
  },
});

export default Login;
