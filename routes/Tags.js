import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//import { connectToRFIDReader } from '../utils/ble.server'; // Import your Bluetooth service

export default function Tags() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    try {
      //await connectToRFIDReader();
      setIsConnected(true);
      // Perform any necessary actions with the RFID reader.
    } catch (error) {
      console.error('Error connecting to RFID reader:', error);
      setIsConnected(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>RFID App</Text>
      <Button title="Connect to RFID Reader" onPress={handleConnect} />
      <Text>{isConnected ? 'Connected to RFID Reader' : 'Not Connected'}</Text>
      {/* Add more UI elements for RFID tag data display */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
