import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import TextField from "../components/TextField";
import Typography from "../components/Typography";
import DropDownPicker from "react-native-dropdown-picker";
import AppContext from "../../AppContext";
import rachel from "../../assets/rachel.png";
import emptyProfile from "../../assets/empty-profile.png";

const Welcome = ({ navigation }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    gender,
    setGender,
    healthcareProvider,
    setHealthcareProvider,
    preferredLanguage,
    setPreferredLanguage,
  } = useContext(AppContext);

  let formComplete =
    email !== "" &&
    password !== "" &&
    firstName !== "" &&
    lastName !== "" &&
    address !== "" &&
    gender !== "" &&
    healthcareProvider !== "" &&
    preferredLanguage !== "";

  const handleSubmit = () => {
    setEmail(email);
    setPassword(password);
    navigation.navigate("AuthedHome");
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="position"
        style={{ flex: 1, zIndex: 5, backgroundColor: "white" }}
      >
        <Typography text={"Welcome"} defaultStyle={true} />
        <Image style={styles.profileImage} source={emptyProfile} />
        <TextField
          value={firstName}
          placeholder={"First Name"}
          onTextChange={setFirstName}
        />
        <TextField
          value={lastName}
          placeholder={"Last Name"}
          onTextChange={setLastName}
        />
        <TextField
          value={address}
          placeholder={"Address"}
          onTextChange={setAddress}
        />
        <View style={styles.pickerOne}>
          <DropDownPicker
            items={[
              { label: "Female", value: "Female" },
              { label: "Male", value: "Male" },
              { label: "Non-binary", value: "Non-binary" },
              { label: "Transgender", value: "Transgender" },
              { label: "Intersex", value: "Intersex" },
              { label: "I prefer not to say", value: "I prefer not to say" },
            ]}
            style={{ backgroundColor: "#F6F6F6" }}
            containerStyle={styles.picker}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            placeholder="Gender"
            onChangeItem={(item) => setGender(item.value)}
          />
        </View>
        <View style={styles.pickerTwo}>
          <DropDownPicker
            items={[
              { label: "Stanford Healthcare", value: "Stanford Healthcare" },
              { label: "Kaiser", value: "Kaiser" },
              { label: "Blue Shield", value: "Blue Shield" },
              { label: "Sutter Health", value: "Sutter Health" },
              { label: "Oscar Health Plan", value: "Oscar Health Plan" },
            ]}
            style={{ backgroundColor: "#F6F6F6" }}
            containerStyle={styles.picker}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            placeholder="Healthcare Provider"
            onChangeItem={(item) => setHealthcareProvider(item.value)}
          />
        </View>
        <View style={styles.pickerThree}>
          <DropDownPicker
            items={[
              {
                label: "American Sign Language",
                value: "American Sign Language",
              },
              {
                label: "Spanish Sign Language",
                value: "Spanish Sign Language",
              },
              {
                label: "Chinese Sign Language",
                value: "Chinese Sign Language",
              },
              { label: "French Sign Language", value: "French Sign Language" },
            ]}
            style={{ backgroundColor: "#F6F6F6" }}
            containerStyle={styles.picker}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            placeholder="Preferred Language"
            onChangeItem={(item) => setPreferredLanguage(item.value)}
          />
        </View>
        <View style={{ marginTop: 20, width: 200 }}>
          <Button
            disabled={!formComplete}
            buttonText={"Complete"}
            onClick={handleSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pickerOne: { zIndex: 3, position: "relative" },
  pickerTwo: { zIndex: 2, position: "relative" },
  pickerThree: { zIndex: 1, position: "relative" },
  picker: { height: 50, width: 343, marginTop: 20 },
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
  profileImage: {
    marginTop: 10,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default Welcome;
