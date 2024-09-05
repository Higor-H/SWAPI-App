import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CardNaves({name, model, passengers }) {
  return (
    <View style={styles.container} >
    <Text>{name}</Text>
    <Text>{model}</Text>
    <Text>{passengers}</Text>
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
