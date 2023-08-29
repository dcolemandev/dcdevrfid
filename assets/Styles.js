import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Navigation Bar
  navigationBar: {
    backgroundColor: '#007AFF',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // Buttons
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  
  // Lists
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  listItemText: {
    fontSize: 16,
  },
  
  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    height: 50,
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  tabBarIcon: {
    fontSize: 24,
    color: '#007AFF',
  },
  
  // Alerts
  alert: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
  },
  
  // Text Inputs
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  
  // Picker
  picker: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  
  // Date Picker
  datePicker: {
    marginBottom: 20,
  },
  
  // Switch
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  
  // Progress View
  progress: {
    marginBottom: 20,
  },
  
  // Segmented Control
  segmentedControl: {
    marginBottom: 20,
  },
  
  // Action Sheet
  actionSheetButton: {
    padding: 15,
    textAlign: 'center',
    fontSize: 18,
    color: '#007AFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
});

export default styles;
