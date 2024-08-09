import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Image1Screen from './src/screens/Image1Screen';
import Image2Screen from './src/screens/Image2Screen';
import Form1Screen from './src/screens/Form1Screen';
import Form2Screen from './src/screens/Form2Screen';


// Crea una instancia del stack navigator
const Stack = createStackNavigator();

// Componente principal de la aplicación
export default function App() {
  return (
    // Contenedor de navegación que envuelve toda la aplicación
    <NavigationContainer>
      {/* Configuración del stack de navegación */}
      <Stack.Navigator initialRouteName="Home">
        {/* Pantalla de inicio */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        {/* Pantalla de imagen */}
        <Stack.Screen
          name="Image1Screen"
          component={Image1Screen}
          options={{ title: 'Imagen 1' }}
        />
        <Stack.Screen
          name="Image2Screen"
          component={Image2Screen}
          options={{ title: 'Imagen 2' }}
        />
        <Stack.Screen
          name="Form1Screen"
          component={Form1Screen}
          options={{ title: 'Comparar dos números' }}
        />
        <Stack.Screen
          name="Form2Screen"
          component={Form2Screen}
          options={{ title: 'Comparar dos números' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
