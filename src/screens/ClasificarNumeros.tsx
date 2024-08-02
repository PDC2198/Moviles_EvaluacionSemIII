import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// Lista de números para clasificar
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const ClasificarNumeros = () => {
  const [clasificados, setClasificados] = useState(false);
  const [pares, setPares] = useState([]);
  const [impares, setImpares] = useState([]);

  // Función para clasificar los números en pares e impares
  const clasificarNumeros = () => {
    const numerosPares = numeros.filter(num => num % 2 === 0);
    const numerosImpares = numeros.filter(num => num % 2 !== 0);

    setPares(numerosPares);
    setImpares(numerosImpares);
    setClasificados(true);
  };

  // Función para mostrar cada número en la lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item}</Text>
    </View>
  );

  // Convertir el array de números a texto para mostrar
  const vectorText = `Vector = [${numeros.join(', ')}]`;

  return (
    <View style={styles.container}>
      <Text style={styles.vectorText}>{vectorText}</Text>
      <Button title="CLASIFICAR" onPress={clasificarNumeros} />
      {clasificados && (
        <View>
          <Text style={styles.title}>Números Pares:</Text>
          <FlatList
            data={pares}
            renderItem={renderItem}
            keyExtractor={(item) => item.toString()}
            horizontal={true} // Lista horizontal
            contentContainerStyle={styles.list}
          />
          <Text style={styles.title}>Números Impares:</Text>
          <FlatList
            data={impares}
            renderItem={renderItem}
            keyExtractor={(item) => item.toString()}
            horizontal={true} // Lista horizontal
            contentContainerStyle={styles.list}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  vectorText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginRight: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
});
