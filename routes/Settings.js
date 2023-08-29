import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export function SettingsContainer() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.setting}>
        <Text>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={handleNotificationsToggle} />
      </View>

      <View style={styles.setting}>
        <Text>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={handleDarkModeToggle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});
