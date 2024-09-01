import { Button, SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";
import axios from "axios";


export default function DetalhePersonagem({ navigation, name}) {
    const goToNaves = () => navigation.navigate("Nave");
    const goToFilmes = () => navigation.navigate("Filmes");


    const [personagem, SetPersonagem] = useState(); 

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>DetalhePersonagem</Text>
        <TouchableOpacity style={styles.button} onPress={goToNaves}>
        <Text style={styles.buttonText}>Ver Naves</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToFilmes}>
        <Text style={styles.buttonText}>Ver Filmes</Text>
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
