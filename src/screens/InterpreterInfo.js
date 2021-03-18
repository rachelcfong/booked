import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import TextField from "../components/TextField";
import Typography from "../components/Typography";
import AppContext from "../../AppContext";
import moriah from "../../assets/moriah.png";
import InterpreterExperience from "../components/InterpreterExperience";
import InterpreterReviews from "../components/InterpreterReviews";
import InterpreterBio from "../components/InterpreterBio";

const InterpreterInfo = ({ route, navigation }) => {
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const { interpreter, appointment } = route.params;
  const [currPage, setCurrPage] = useState(1);
  const options = [
    { label: "Bio", value: "0" },
    { label: "Experience", value: "1" },
    { label: "Reviews", value: "2" },
  ];

  const handleSubmit = () => {
    setEmail(email);
    setPassword(password);
    navigation.navigate("AuthedHome");
  };

  const renderPage = () => {
    if (currPage === 0) {
      return <InterpreterBio interpreter={interpreter} />;
    } else if (currPage === 1) {
      return <InterpreterExperience interpreter={interpreter} />;
    } else {
      return <InterpreterReviews interpreter={interpreter} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.miniHeader}>Meet</Text>
          <Text style={styles.header}>{interpreter.name}</Text>
          <Text>{`${interpreter.yearsExp} years of experience`}</Text>
        </View>
        <View style={{ width: 125 }}>
          <Button
            buttonText={"Book"}
            onClick={() =>
              navigation.navigate("Confirm Booking", {
                appointment: appointment,
                interpreter: interpreter,
              })
            }
          />
        </View>
      </View>
      <Image style={styles.profileImage} source={moriah} />
      <View
        style={{
          alignItems: "center",
          alignSelf: "center",
          marginTop: 15,
          width: 375,
          borderRadius: 45,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 2.5,
          borderColor: "#307FE2",
          borderWidth: 1.5,
        }}
      >
        <SwitchSelector
          backgroundColor={"#F5FAFF"}
          buttonColor={"#FFF"}
          selectedColor={"#307FE2"}
          bold={true}
          height={43}
          options={options}
          textColor={"#BCC5D0"}
          initial={currPage}
          onPress={(value) => {
            setCurrPage(Number(value));
          }}
        />
      </View>
      <View style={styles.pageContainer}>{renderPage()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    padding: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pageContainer: {
    marginTop: 20,
    backgroundColor: "#F5FAFF",
    flex: 1,
    padding: 20,
  },

  miniHeader: { fontSize: 16, fontWeight: "bold" },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 8,
    color: "#307FE2",
  },
  profileImage: {
    marginLeft: 20,
    marginTop: 10,
    width: 375,
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

export default InterpreterInfo;
