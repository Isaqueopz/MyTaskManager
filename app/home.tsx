import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <View style={styles.app_container}>
      <Text style={styles.text_container}>Task Manager</Text>

      <TextInput
        style={styles.input}
        placeholder="Type your task"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.home_button}>
        <Text style={styles.text_button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    backgroundColor: '#13293D',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  text_container: {
    color: '#E8F1F2',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  home_button: {
    backgroundColor: '#006494',
    paddingVertical: 12,
    paddingHorizontal: 54,
    borderRadius: 20,
  },
  text_button: {
    color: '#E8F1F2',
    fontSize: 18,
    textAlign: 'center',
  },
});
