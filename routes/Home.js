import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
     <Text>Welcome to my App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Dark Background Color
    padding: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  darkButton: {
    backgroundColor: '#555', // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
  },
  smButton:{
backgroundColor: '#555', // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    width: 'auto',
  },
  mdButton:{
backgroundColor: '#555', // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '4rem',
    width: 'auto',
  },
  lgButton: {
backgroundColor: '#555', // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '6rem',
    width: 'auto',
  },
  darkButtonText: {
    color: '#fff', // Light Text Color
    fontSize: 18,
  },
  // Pressed State
  darkButtonPressed: {
    backgroundColor: '#F5F5F5', // Off-White Background on Press
  },
  darkButtonTextPressed: {
    color: '#222', // Dark Text Color on Press
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  midContainer: {
    height: '30%',
    backgroundColor: '#444', // Darker Container Color
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    height: '6rem',
  },
  bottomButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-e',
    marginBottom: 20,
    height: '4rem',
  },
  column: {
    flex: 0.48,
    backgroundColor: '#222',
    borderRadius: 8,
  },
  columnThird: {
    flex: 0.3,
    backgroundColor: '#222',
    borderRadius: 8,
  },
  columnFourth:{
    flex: 0.3,
    backgroundColor: '#222',
    borderRadius: 8,
  }
});
