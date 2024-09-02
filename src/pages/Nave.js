import { Button, SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardNaves from "../components/CardNaves";

export default function Nave({ navigation, route }) {
  const { naves } = route.params;
  const [navesDetalhes, setNavesDetalhes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNavesDetails();
  }, []);

  async function fetchNavesDetails() {
    try {
      const detalhesNaves = await Promise.all(naves.map(async (naveUrl) => {
        const response = await axios.get(naveUrl);
        return response.data;
      }));
      setNavesDetalhes(detalhesNaves);
    } catch (error) {
      console.error('Erro ao buscar detalhes das naves:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={navesDetalhes}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <CardNaves
              name={item.name}
              model={item.model}
              passengers={item.passengers}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
});
