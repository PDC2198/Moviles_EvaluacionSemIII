import React from 'react';
import { View, StyleSheet } from 'react-native';

const Interface3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.boxSmallPurple} />
      </View>
      <View style={styles.middleRow}>
        <View style={styles.boxMediumOrange} />
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.boxSmallCyan} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#123456',
  },
  topRow: {
    width: '100%',
    alignItems: 'flex-end',
  },
  middleRow: {
    width: '100%',
    alignItems: 'flex-end',
  },
  bottomRow: {
    width: '100%',
    alignItems: 'center',
  },
  boxSmallPurple: {
    width: 30,
    height: 30,
    backgroundColor: '#7B68EE',
  },
  boxMediumOrange: {
    width: 30,
    height: 60,
    backgroundColor: '#FFA500',
  },
  boxSmallCyan: {
    width: 30,
    height: 30,
    backgroundColor: '#00FFFF',
  },
});

export default Interface3;
