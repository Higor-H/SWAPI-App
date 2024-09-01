import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useEffect } from "react";

import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import Personagem from "../components/Personagem";


export default function Personagens({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Personagens</Text>
        <TouchableOpacity>
            <Personagem
            Nome={"Luke Skywalker"}
            navegateDetalhes={() =>
                navigation.navigate("Detalhes do Personagem", "Luke Skywalker")}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Personagem
            Nome={"Darth Vader"}
            navegateDetalhes={() =>
                navigation.navigate("Detalhes do Personagem")}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Personagem
            Nome={"Han Solo"}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Personagem
            Nome={"Yoda"}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Personagem
            Nome={"Chewbacca"}
            />
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
