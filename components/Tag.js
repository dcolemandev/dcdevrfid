import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RFIDTagComponent = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF', // iOS blue color
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RFIDTagComponent;
