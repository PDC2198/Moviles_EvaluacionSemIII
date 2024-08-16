import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CartScreen from './src/screens/CartScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewCartScreen from './src/screens/ViewCartScreen'; // Importa la pantalla nueva

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="BIENVENIDA" component={WelcomeScreen} />
        <Stack.Screen name="INICIO DE SESIÓN" component={LoginScreen} />
        <Stack.Screen name="REGISTRO DE USUARIO" component={RegisterScreen} />
        <Stack.Screen name="PAQUETES" component={CartScreen} />
        <Stack.Screen name="VIEW_CART" component={ViewCartScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
