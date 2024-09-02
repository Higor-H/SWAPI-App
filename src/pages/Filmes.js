import { Button, SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardFilmes from "../components/CardFilmes";

export default function Filmes({ navigation, route }) {
  const { filmes } = route.params;
  const [filmesDetalhes, setfilmesDetalhes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchfilmesDetails();
  }, []);

  async function fetchfilmesDetails() {
    try {
      const detalhesfilmes = await Promise.all(filmes.map(async (naveUrl) => {
        const response = await axios.get(naveUrl);
        return response.data;
      }));
      setfilmesDetalhes(detalhesfilmes);
    } catch (error) {
      console.error('Erro ao buscar detalhes das filmes:', error);
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
          data={filmesDetalhes}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <CardFilmes
              title={item.title}
              director={item.director}
              release_date={item.release_date}
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
