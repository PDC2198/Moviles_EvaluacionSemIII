import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';

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
          options={{ title: 'Pantalla de Inicio' }}
        />
        {/* Pantalla de registro */}
        <Stack.Screen 
          name="Registro" 
          component={RegisterScreen} 
          options={{ title: 'Registro de Usuario' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
