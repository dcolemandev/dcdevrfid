import React from 'react';
import { View, Text, Button } from 'react-native';

class RFIDTag {
  constructor(id, data) {
    this.id = id; // Unique identifier for the RFID tag
    this.data = data; // Data associated with the RFID tag (e.g., information about the tagged item)
    this.isScanned = false; // Flag to track whether the tag has been scanned
  }

  // Method to handle scanning the RFID tag
  scan() {
    this.isScanned = true;
    // You can add more logic here, like sending the scanned data to a server, updating UI, etc.
  }

  // Method to render the RFID tag information in your UI
  render() {
    return (
      <View>
        <Text>Tag ID: {this.id}</Text>
        <Text>Data: {this.data}</Text>
        <Text>Scanned: {this.isScanned ? 'Yes' : 'No'}</Text>
        <Button title="Scan" onPress={() => this.scan()} />
      </View>
    );
  }
}

export default RFIDTag;
