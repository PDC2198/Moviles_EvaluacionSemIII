import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import Button from '../components/TouchableOpacity';

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
  const currentDate = getCurrentDate();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{currentDate}</Text>
      </View>

      <Text style={styles.title}>¡BIENVENIDO!</Text>

      <Button
        title="IMAGEN 1"
        onPress={() => navigation.navigate('Image1Screen')}
        style={styles.button}
      />

      <Button
        title="IMAGEN 2"
        onPress={() => navigation.navigate('Image2Screen')}
        style={styles.button}
      />

      <Button
        title="MAYOR O IGUAL"
        onPress={() => navigation.navigate('Form1Screen')}
        style={styles.button}
      />

      <Button
        title="MENOR O IGUAL"
        onPress={() => navigation.navigate('Form2Screen')}
        style={styles.button}
      />
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
    fontSize: 12,
    color: '#343a40',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#11eac6',
  },
  button: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
