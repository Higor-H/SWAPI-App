import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CardFilmes({title, director, release_date }) {
  return (
    <View style={styles.container} >
    <Text>{title}</Text>
    <Text>{director}</Text>
    <Text>{release_date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
  },
});
