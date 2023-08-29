import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export const Map = () => {
  const [mapRegion, setmapRegion] = useState({
   latitude: 39.0837,
  longitude: -84.5086,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        userInterfaceStyle={'dark'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
