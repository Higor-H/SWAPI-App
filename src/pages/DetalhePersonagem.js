import { Button, SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";



export default function DetalhePersonagem({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>DetalhePersonagem</Text>
        <TouchableOpacity >
            <Text>Naves</Text>
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
