import { Button, SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";




export default function Sobre({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Sobre</Text>
        <Text>Alunos:</Text>
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