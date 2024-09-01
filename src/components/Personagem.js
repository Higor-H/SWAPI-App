import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
  } from "react-native";
import React from "react";

export default function Personagem({ Nome, navegateDetalhes}) {
  return (
    <TouchableOpacity style={styles.container} onPress={navegateDetalhes}>
      <Text>{Nome}</Text>
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
