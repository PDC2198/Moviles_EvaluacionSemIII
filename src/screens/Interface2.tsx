import React from 'react';
import { View, StyleSheet } from 'react-native';

const Interface2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.boxSmallPurple} />
        <View style={styles.boxSmallOrange} />
        <View style={styles.boxLargeCyan} />
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.boxLarge} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456', // Fondo del contenedor
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bottomRow: {
    width: '100%',
    alignItems: 'center',
  },
  boxLarge: {
    width: 200,
    height: 100,
    backgroundColor: '#123456',
  },
  boxSmallPurple: {
    width: 30,
    height: 30,
    backgroundColor: '#7B68EE',
  },
  boxSmallOrange: {
    width: 30,
    height: 30,
    backgroundColor: '#FFA500',
  },
  boxLargeCyan: {
    width: 100,
    height: 30,
    backgroundColor: '#00FFFF',
  },
});

export default Interface2;
