import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { description: 'First Task' },
    { description: 'Second Task' },
  ]);

  const [newTask, setNewTask] = useState('');

  const createTask = () => {
    console.log('Create Task', newTask);
    setTasks([...tasks, { description: newTask }]);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TaskList</Text>
      {/* Task List Items */}
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />

      {/* New task input */}
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder='New task'
        placeholderTextColor='gray'
        style={styles.input}
      />
      <Button title='Add Task' onPress={() => createTask()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101112',
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    color: 'white',
    padding: 15,
    backgroundColor: '#1D2125',
    borderRadius: 5,
  },
});
