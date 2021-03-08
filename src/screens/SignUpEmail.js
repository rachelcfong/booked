import React, { useContext } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import TextField from "../components/TextField";
import Typography from "../components/Typography";
import AppContext from "../../AppContext";

const SignUpEmail = ({ navigation }) => {
  const { email, setEmail, password, setPassword } = useContext(AppContext);

  const handleSubmit = () => {
    setEmail(email);
    setPassword(password);
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Typography text={"Sign up"} defaultStyle={true} />
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
