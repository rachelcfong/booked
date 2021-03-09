import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import TextField from "../components/TextField";
import Typography from "../components/Typography";
import AppContext from "../../AppContext";

const Login = ({ navigation }) => {
  const { email, setEmail, password, setPassword } = useContext(AppContext);

  const handleSubmit = () => {
    setEmail(email);
    setPassword(password);
    navigation.navigate("AuthedHome");
  };

  return (
    <View style={styles.container}>
      <Typography text={"Login"} defaultStyle={true} />
      <TextField value={email} placeholder={"Email"} onTextChange={setEmail} />
      <TextField
        value={password}
        placeholder={"Password"}
        onTextChange={setPassword}
        hideInput={true}
      />
      <View style={styles.button}>
        <Button buttonText="Log in" onClick={handleSubmit} />
      </View>
      <ClearButton buttonText="Forgot your password?" onClick={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "white",
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
    marginTop: 50,
    marginLeft: 40,
    width: "90%",
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
