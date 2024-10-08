import { Button, SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";
import Personagens from "./Personagens";



export default function Home({ navigation }) {
    const goToPersonagens = () => navigation.navigate("Personagens");
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Home</Text>
        <TouchableOpacity onPress={goToPersonagens}>
            <Text>Personagens</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#f5f5f5",
  }
});
