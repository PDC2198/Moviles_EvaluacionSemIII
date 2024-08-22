import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState<string>('');

  // Hook para obtener la fecha actual al cargar el componente
  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    setCurrentDate(date.toLocaleDateString('es-ES', options).replace(',', ' del')); // Formato de la fecha
  }, []);

  const handleAccess = () => {
    navigation.navigate('FORMULARIO');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡BIENVENIDO!</Text>
      <Text style={styles.dateText}>{currentDate}</Text> {/* Fecha actual */}
      <TouchableOpacity style={styles.button} onPress={handleAccess}>
        <Text style={styles.buttonText}>ACCEDER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c5776',
    padding: 18,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#11eac6',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 13,
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#11eac6',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
