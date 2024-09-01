import { Button, SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";
import { Axios } from "axios";




export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Home</Text>
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
