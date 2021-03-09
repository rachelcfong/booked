import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AppContext from "../../AppContext";
import { INTERPRETERS } from "../../constants";

const Tag = ({ label, clicked, index, tagStates, setTagStates, setInterpreters }) => {
  const { gender } = React.useContext(AppContext);

  const filterFunctions = [
    (interpreter) => {
      interpreter.yearsExp >= 3;
    },
    (interpreter) => {
      interpreter.rating >= 3;
    },
    (interpreter) => {
      interpreter.rating >= 4;
    },
    (interpreter) => {
      interpreter.gender === gender;
    },
  ];

  const handleClick = () => {
    // update tag states
    let tagStatesCopy = [...tagStates];
    tagStatesCopy[index] = !tagStatesCopy[index];
    setTagStates(tagStatesCopy);
  };
  return (
    <TouchableOpacity style={clicked ? styles.clicked : styles.unclicked} onPress={handleClick}>
      <Text style={clicked ? styles.clickedText : styles.unclickedText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clickedText: {
    fontSize: 10,
    color: "white",
  },
  unclickedText: { fontSize: 10, color: "#307FE2" },
  clicked: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307FE2",
    height: 20,
    borderWidth: 1,
    borderColor: "#307FE2",
    paddingRight: 7,
    paddingLeft: 7,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
  },
  unclicked: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "#307FE2",
    borderWidth: 1,
    height: 20,
    paddingRight: 7,
    paddingLeft: 7,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
  },
});

export default Tag;
