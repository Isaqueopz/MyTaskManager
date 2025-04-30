import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function EntryApp() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text_color}>Welcome to Task Manager</Text>
      <View style={styles.container_row}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push('/home')}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push('/deleted_tasks')}
        >
          <Text style={styles.buttonText}>Go to deleted tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13293D',
  },
  text_color: {
    color: '#FFF',
    padding: 30,
    fontWeight: 'bold',
    fontSize: 25,
  },
  customButton: {
    backgroundColor: '#006494',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container_row: {
    flexDirection: 'row',
  },
});
