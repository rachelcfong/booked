import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppContext from "../../AppContext";
import Review from "../components/Review";
import ProfileImage from "../../assets/blankpropic.png";
import ClearButton from "../components/ClearButton";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  const {
    firstName,
    preferredLanguage,
    setPreferredLanguage,
    about,
    setAbout,
  } = useContext(AppContext);

  const [isEditingLangauges, setIsEditingLanguages] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      <Image style={styles.profileImage} source={ProfileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{firstName ? firstName : "Kim"}</Text>
      </View>
      <View style={styles.bioContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.header}>Sign Language(s)</Text>
          {!isEditingLangauges ? (
            <TouchableOpacity
              style={{ marginRight: 30 }}
              onPress={() => {
                setIsEditingLanguages(!isEditingLangauges);
              }}
            >
              <Text style={styles.editButton}>edit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ marginRight: 30 }}
              onPress={() => {
                setIsEditingLanguages(!isEditingLangauges);
              }}
            >
              <Text style={styles.editButton}>done</Text>
            </TouchableOpacity>
          )}
        </View>
        {isEditingLangauges ? (
          <TextInput
            style={{ fontSize: 16 }}
            onChangeText={setPreferredLanguage}
            value={preferredLanguage}
            multiline={true}
          />
        ) : (
          <Text
            style={preferredLanguage ? styles.bodyText : styles.placeholderText}
          >
            {preferredLanguage
              ? preferredLanguage
              : "Add your preferred language here"}
          </Text>
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.header}>About</Text>
          {!isEditingAbout ? (
            <TouchableOpacity
              style={{ marginRight: 30 }}
              onPress={() => {
                setIsEditingAbout(!isEditingAbout);
              }}
            >
              <Text style={styles.editButton}>edit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ marginRight: 30 }}
              onPress={() => {
                setIsEditingAbout(!isEditingAbout);
              }}
            >
              <Text style={styles.editButton}>done</Text>
            </TouchableOpacity>
          )}
        </View>
        {!isEditingAbout ? (
          <Text style={styles.bodyText}>
            {about ? about : "Add your bio here"}
          </Text>
        ) : (
          <TextInput
            style={{ fontSize: 16 }}
            onChangeText={setAbout}
            value={about}
            multiline={true}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    height: 245,
    width: "100%",
    backgroundColor: "#307FE2",
    justifyContent: "flex-end",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 80,
  },
  bioContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  header: {
    fontSize: 16,
    color: "#1E3F63",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#307FE2",
  },
  bodyText: {
    fontSize: 16,
  },
  profileImage: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginTop: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    position: "absolute",
    padding: 10,
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
  editButton: {
    fontSize: 16,
    color: "#307FE2",
  },
  placeholderText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
});

export default Profile;
