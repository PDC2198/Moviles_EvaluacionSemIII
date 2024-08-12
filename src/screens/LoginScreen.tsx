import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>('');

  // Hook para obtener la fecha actual al cargar el componente
  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    setCurrentDate(date.toLocaleDateString('es-ES', options).replace(',', ' del')); // Formato de fecha en español
  }, []);

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Bienvenido al sistema', 'Has iniciado sesión correctamente.');
      console.log('Email:', email);
      console.log('Contraseña:', password);
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡BIENVENIDO A SAMHÚ!</Text>
      <Text style={styles.title}>INICIAR SESIÓN</Text>
      <Text style={styles.dateText}>{currentDate}</Text> {/* Fecha actual */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <MaterialCommunityIcons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <Button title="ENTRAR" onPress={handleLogin} color="#8a3a3a"/>

      <TouchableOpacity onPress={() => navigation.navigate('REGISTRO DE USUARIO')}>
        <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate ya!</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#11eac6',
  },
  dateText: {
    fontSize: 13,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    padding: 5,
  },
  registerText: {
    marginTop: 20,
    color: '#11eac6',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
