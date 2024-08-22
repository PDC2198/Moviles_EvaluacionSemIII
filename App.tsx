import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './src/screens/FormScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="BIENVENIDA" component={WelcomeScreen} />
        <Stack.Screen name="FORMULARIO" component={FormScreen} />
        <Stack.Screen name="FEEDBACK" component={FeedbackScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
