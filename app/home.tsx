import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

interface Task {
  id: number;
  task: string;
}

export default function Home() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask() {
    const newTaskWithId = {
      id: Date.now(),
      task: newTask,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskWithId]);
    setNewTask('');
  }

  return (
    <View style={styles.app_container}>
      <Text style={styles.text_container}>Task Manager</Text>

      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Type your task"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.home_button} onPress={handleAddTask}>
        <Text style={styles.text_button}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.taskListContainer}>
        {tasks.map((task) => (
          <Text key={task.id} style={styles.taskText}>
            {task.task.trim() ? task.task : 'Empty Task'}
          </Text>
        ))}
      </View>
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
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  taskListContainer: {
    marginTop: 30,
  },
  taskText: {
    color: '#E8F1F2',
    fontSize: 20,
    marginBottom: 10,
  },
});
