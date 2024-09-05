import { Button, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DetalhePersonagem({ navigation, route }) {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [naves, setNaves] = useState([]);
    const [filmes, setFilmes] = useState([]);
    const [navesErro, setNavesErro] = useState(false);
    const [filmesErro, setFilmesErro] = useState(false);

    useEffect(() => {
        getPersonagem();
    }, []);

    async function getPersonagem() {
        setLoading(true);
        try {
            const response = await axios.get(`https://swapi.dev/api/people?search=${route.params.name}`);
            const results = response.data.results;
            setPersonagens(results);

            if (results.length > 0) {
                const starships = results[0].starships;
                const filmes = results[0].films;
                if (starships.length > 0) {
                    setNaves(starships);
                } else {
                    setNavesErro(true);
                }

                if (filmes.length > 0) {
                    setFilmes(filmes);
                } else {
                    setFilmesErro(true);
                }
            } else {
                setNavesErro(true);
            }
        } catch (error) {
            console.error('Erro ao buscar personagem:', error);
        } finally {
            setLoading(false);
        }
    }

    const goToNaves = () => navigation.navigate("Nave", { naves });
    const goToFilmes = () => navigation.navigate("Filmes", {filmes});

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Detalhe do Personagem</Text>
                {loading ? (
                    <ActivityIndicator size={"large"} />
                ) : (
                    <FlatList
                        data={personagens}
                        keyExtractor={(item) => item.url}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Text style={styles.label}>Nome: <Text style={styles.value}>{item.name}</Text></Text>
                                <Text style={styles.label}>Altura: <Text style={styles.value}>{item.height} cm</Text></Text>
                                <Text style={styles.label}>Peso: <Text style={styles.value}>{item.mass} kg</Text></Text>
                                <Text style={styles.label}>Cor do Cabelo: <Text style={styles.value}>{item.hair_color}</Text></Text>
                                <Text style={styles.label}>Cor da Pele: <Text style={styles.value}>{item.skin_color}</Text></Text>
                                <Text style={styles.label}>Cor dos Olhos: <Text style={styles.value}>{item.eye_color}</Text></Text>
                                <Text style={styles.label}>Ano de Nascimento: <Text style={styles.value}>{item.birth_year}</Text></Text>
                                <Text style={styles.label}>Gênero: <Text style={styles.value}>{item.gender}</Text></Text>
                            </View>
                        )}
                    />
                )}

                {naves.length > 0 ? (
                    <TouchableOpacity style={styles.button} onPress={goToNaves}>
                        <Text style={styles.buttonText}>Ver Naves</Text>
                    </TouchableOpacity>
                ) : (
                    <Text style={styles.noNavesText}>Não tem naves</Text>
                )}


                {filmes.length > 0 ? (
                <TouchableOpacity style={styles.button} onPress={goToFilmes}>
                    <Text style={styles.buttonText}>Ver Filmes</Text>
                </TouchableOpacity>
                ) : (
                    <Text style={styles.noNavesText}>Não tem filmes</Text>
                )}
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    button: {
        backgroundColor: "#153B4D",
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#555",
    },
    noNavesText: {
        color: "#d9534f",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
});
