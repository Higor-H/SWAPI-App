import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CardNaves({name, model, passengers }) {
  return (
    <TouchableOpacity style={styles.container} >
     <Text>{name}</Text>
     <Text>{model}</Text>
     <Text>{passengers}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
});
