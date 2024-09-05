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
      <Text style={styles.textContainer}>{Nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    //textAlign: "center",
    height: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#153B4D",
    elevation: 50,
    opacity: "20%",
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  textContainer: {
    marginTop: "2%",
    textAlign: "center",   
    color: "white", 
    fontSize: 16,
  },
});

