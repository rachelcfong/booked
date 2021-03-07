import React, { useContext } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

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
      <Text style={styles.header}>Sign Up</Text>
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
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alreadyAccount}>
        <Text>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },
  textInput: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 8,
  },
  header: {
    marginTop: 60,
    marginBottom: 10,
    fontSize: 40,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 10,
  },
  alreadyAccount: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 50,
    width: 300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 50,
    width: 300,
    marginTop: 40,
    borderRadius: 8,
  },
});

export default SignUpEmail;
