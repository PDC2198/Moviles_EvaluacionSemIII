import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { ClasificarNumeros } from './src/screens/ClasificarNumeros';
import Interface1 from './src/screens/Interface1';
import Interface2 from './src/screens/Interface2';
import Interface3 from './src/screens/Interface3';

//Profe, al momento de llamar a las demás interfaces se me amontona todo y todo se desconfigura para mal, ya no supe qué hacer.
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BIENVENIDO</Text>
      <p>Pablo Del Corral - Aplicaciones Móviles I - Evaluación I</p>
      <ClasificarNumeros />
      <Text style={styles.text}>INTERFACES</Text>
      <Interface1 />
      
      {/*<Interface2/>*/}
      {/*<Interface3/>*/ }
      

    </View>
  );
};

// Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Espaciado alrededor del contenido
    backgroundColor: '#fff', // Fondo blanco
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40, // Tamaño grande para el texto
    textAlign: 'center', // Centrar el texto horizontalmente
    fontWeight: 'bold', // Hacer el texto en negrita
  },

});

export default App;
