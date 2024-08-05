import React from 'react';
import { View, Text, Button, StyleSheet, Image, Platform } from 'react-native';

// Función para obtener la fecha actual en formato legible
const getCurrentDate = (): string => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return now.toLocaleDateString(undefined, options);
};

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  //fecha actual usando la función personalizada
  const currentDate = getCurrentDate();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{currentDate}</Text>
      </View>
      
      <Image
        source={{ uri: '/assets/logosamhu.png' }} 
        style={styles.image}
      />
      
      <Text style={styles.title}>¡Bienvenido a SAMHÚ!</Text>
      <Text style={styles.subtitle}>Donde todo es más eficiente.</Text>
      
      <Button
        title="Regístrate"
        onPress={() => navigation.navigate('Registro')}
        color="#afbf49" // Color del botón
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c5776', // Color de fondo
    padding: 16,
  },
  header: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    left: 20,
    backgroundColor: '#e9ecef',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  date: {
    fontSize: 16,
    color: '#343a40',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#11eac6',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
