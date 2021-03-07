import React, { useContext } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";

import AppContext from "../../AppContext";
import rachel from "../../assets/rachel.png";

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
    setGender,
    setHealthcareProvider,
    setPreferredLanguage,
  } = useContext(AppContext);

  const handleSubmit = () => {
    setEmail(email);
    setPassword(password);
    navigation.navigate("UserDashboard");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="position"
        style={{ flex: 1, zIndex: 5 }}
      >
        <Text style={styles.header}>Welcome</Text>
        <Image style={styles.profileImage} source={rachel} />
        <TextInput
          style={styles.textInput}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder={"First Name"}
        />
        <TextInput
          style={styles.textInput}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder={"Last Name"}
        />
        <TextInput
          style={styles.textInput}
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder={"Address"}
        />
        <View style={styles.pickerOne}>
          <DropDownPicker
            style={styles.pickerOne}
            items={[
              { label: "Female", value: "Female" },
              { label: "Male", value: "Male" },
            ]}
            containerStyle={{ height: 40, width: 300, marginTop: 20, zIndex: 1 }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            placeholder="Gender"
            onChangeItem={(item) => setGender(item.value)}
          />
        </View>
        <View style={styles.pickerTwo}>
          <DropDownPicker
            style={styles.pickerTwo}
            items={[
              { label: "Stanford Healthcare", value: "Stanford Healthcare" },
              { label: "Kaiser", value: "Kaiser" },
            ]}
            containerStyle={{ height: 40, width: 300, marginTop: 20, zIndex: 0 }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            placeholder="Healthcare Provider"
            onChangeItem={(item) => setHealthcareProvider(item.value)}
          />
        </View>
        <View style={styles.pickerThree}>
          <DropDownPicker
            style={styles.pickerThree}
            items={[
              { label: "American Sign Language", value: "American Sign Language" },
              { label: "Spanish Sign Language", value: "Spanish Sign Language" },
            ]}
            containerStyle={{ height: 40, width: 300, marginTop: 20, zIndex: -1 }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            placeholder="Preferred Language"
            onChangeItem={(item) => setPreferredLanguage(item.value)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Complete</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pickerOne: { zIndex: 3, position: "relative" },
  pickerTwo: { zIndex: 2, position: "relative" },
  pickerThree: { zIndex: 1, position: "relative" },
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
    marginTop: 30,
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
  profileImage: {
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default Welcome;
