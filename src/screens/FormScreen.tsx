import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FormScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [comentario, setComentario] = useState('');

  const handleForm = () => {
    if (email && password && comentario) {
      // Mostrar los datos en la consola
      console.log('Email:', email);
      console.log('Contraseña:', password);
      console.log('Comentario:', comentario);

      // Navega a la pantalla del feedback y pasar los datos como parámetros
      navigation.navigate('FEEDBACK', { email, password, comentario });
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORMULARIO</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Comentario"
        value={comentario}
        onChangeText={setComentario}
      />

      <Button title="ENVIAR FEEDBACK" onPress={handleForm} color="#8a3a3a" />
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
    textAlign: 'center',
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

export default FormScreen;
