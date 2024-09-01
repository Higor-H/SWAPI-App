import React from "react";
import { Button, SafeAreaView, StyleSheet, TouchableOpacity , Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home"
import Sobre from "./src/pages/Sobre"
import Personagens from "./src/pages/Personagens"
import Nave from "./src/pages/Nave"
import Filmes from "./src/pages/Filmes"
import DetalhePersonagem from "./src/pages/DetalhePersonagem"
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

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

export default App;
