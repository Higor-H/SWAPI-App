import { Button, SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";



export default function Nave({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Nave</Text>
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
