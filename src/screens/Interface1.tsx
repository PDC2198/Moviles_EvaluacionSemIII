import React from 'react';
import { View, StyleSheet } from 'react-native';

const Interface1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.boxLarge} />
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.boxSmallPurple} />
        <View style={styles.boxMediumOrange} />
        <View style={styles.boxSmallCyan} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#123456',
  },
  leftColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rightColumn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
  },
  boxLarge: {
    width: 100,
    height: 200,
    backgroundColor: '#123456',
  },
  boxSmallPurple: {
    width: 30,
    height: 30,
    backgroundColor: '#7B68EE',
    marginBottom: 10,
  },
  boxMediumOrange: {
    width: 30,
    height: 60,
    backgroundColor: '#FFA500',
    marginBottom: 10,
  },
  boxSmallCyan: {
    width: 30,
    height: 30,
    backgroundColor: '#00FFFF',
  },
});

export default Interface1;
