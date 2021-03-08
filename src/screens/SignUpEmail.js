import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import TextField from "../components/TextField";
import ErrorText from "../components/ErrorText";
import Typography from "../components/Typography";
import AppContext from "../../AppContext";

const SignUpEmail = ({ navigation }) => {
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const [validForm, setValidForm] = useState(true);

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidForm = () => {
    return isValidEmail(email);
  };

  const handleSubmit = () => {
    if (isValidForm()) {
      setValidForm(true);
      setEmail(email);
      setPassword(password);
      navigation.navigate("Welcome");
    } else {
      setValidForm(false);
    }
  };

  return (
    <View style={styles.container}>
      <Typography text={"Sign up"} defaultStyle={true} />
      <View style={{ alignSelf: "flex-start", marginLeft: 40 }}>
        {validForm ? <></> : <ErrorText text="Invalid email address" />}
      </View>
      <TextField value={email} placeholder={"Email"} onTextChange={setEmail} />
      <TextField
        value={password}
        placeholder={"Password"}
        onTextChange={setPassword}
        hideInput={true}
      />
      <View style={styles.button}>
        <Button buttonText={"Sign up"} onClick={handleSubmit} />
      </View>
      <ClearButton
        buttonText={"Already have an account? Log in"}
        onClick={() => {
          navigation.goBack();
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },

  button: {
    marginTop: 50,
  },
});

export default SignUpEmail;
