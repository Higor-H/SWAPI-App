import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CardFilmes({title, director, release_date }) {
  return (
    <TouchableOpacity style={styles.container} >
     <Text>{title}</Text>
     <Text>{director}</Text>
     <Text>{release_date}</Text>
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
