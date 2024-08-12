import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RegisterScreen: React.FC = () => {
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setconfirmarPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [users, setUsers] = useState<{ Nombre: string; Apellido: string; email: string; password: string }[]>([]);

  const handleRegister = () => {
    if (Nombre && Apellido && email && password) {
      if (password === confirmarPassword) {
        // Crear un nuevo usuario
        const newUser = { Nombre, Apellido, email, password };
        
        // Agregar el nuevo usuario al arreglo existente
        setUsers((prevUsers) => [...prevUsers, newUser]);
        
        // Mostrar alerta de éxito en registro
        Alert.alert('Registro exitoso', 'Sus datos han sido registrados con éxito.');
        console.log('Usuarios Registrados:', [...users, newUser]); // Mostrar los usuarios registrados en la consola
        
        // Limpiar los campos
        setNombre('');
        setApellido('');
        setEmail('');
        setPassword('');
        setconfirmarPassword('');
      } else {
        Alert.alert('Error', 'Las contraseñas no coinciden.');
      }
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGÍSTRATE</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={Nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={Apellido}
        onChangeText={setApellido}
      />
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmarPassword}
          onChangeText={setconfirmarPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <MaterialCommunityIcons
            name={confirmPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <Button title="REGISTRARME" onPress={handleRegister} color="#8a3a3a" />
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
    marginBottom: 20,
    color: '#11eac6',
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
});

export default RegisterScreen;
