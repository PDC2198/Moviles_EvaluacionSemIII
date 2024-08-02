import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export const NumberList = ({ title, numbers }) => {
  // Función para renderizar cada número en la lista
  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item}</Text>
  );

  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      {/* Mostrar lista si hay números; si no, mostrar mensaje */}
      {numbers.length > 0 ? (
        <FlatList
          data={numbers}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          style={styles.list}
        />
      ) : (
        <Text style={styles.empty}>Sin números, por favor agrégalos!</Text>
      )}
    </View>
  );
};

// Estilos básicos para el componente
const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20, // Espacio en la parte inferior
  },
  title: {
    fontSize: 24, // Tamaño de fuente para el título
    fontWeight: 'bold', // Negrita para el título
    marginBottom: 10, // Espacio debajo del título
  },
  list: {
    marginBottom: 10, // Espacio debajo de la lista
  },
  item: {
    fontSize: 18, // Tamaño de fuente para cada ítem
    padding: 5, // Espaciado dentro de cada ítem
  },
  empty: {
    fontSize: 18, // Tamaño de fuente para el mensaje vacío
    color: 'gray', // Color gris para el mensaje
    textAlign: 'center', // Alinear texto al centro
    padding: 20, // Espaciado alrededor del mensaje
  },
});
