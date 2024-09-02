import { Button, SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";




export default function Sobre({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Sobre</Text>
        <Text>Alunos:</Text>
        <View>
            <Text>Nome: Higor Milani </Text>
            <Text>Email: 1135828@atitus.edu.br</Text>
            <Text>RA: 1135828 </Text>
        </View>
        <View>
            <Text>Nome: Enzo Gambatto Almeida</Text>
            <Text>Email: 1134927@atitus.edu.br</Text>
            <Text>RA: 1134927</Text>
        </View>
        <View>
            <Text>Nome:  </Text>
            <Text>Email: </Text>
            <Text>RA:  </Text>
        </View>
        
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