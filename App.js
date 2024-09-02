import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sobre from "./src/pages/Sobre";
import Personagens from "./src/pages/Personagens";
import Nave from "./src/pages/Nave";
import Filmes from "./src/pages/Filmes";
import DetalhePersonagem from "./src/pages/DetalhePersonagem";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Personagens")}
        >
          <Text style={styles.buttonText}>Personagens</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: "Star Wars",
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
                <Ionicons name="menu" size={25} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            headerTitle: "Sobre",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Personagens"
          component={Personagens}
          options={{
            headerTitle: "Personagens",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Detalhes do Personagem"
          component={DetalhePersonagem}
          options={{
            headerTitle: "Detalhes do Personagem",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Nave"
          component={Nave}
          options={{
            headerTitle: "Nave",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Filmes"
          component={Filmes}
          options={{
            headerTitle: "Filmes",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
