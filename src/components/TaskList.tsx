import { View, Text, StyleSheet, FlatList } from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';

export default function TaskList() {
  const [task, setTask] = useState([
    { description: 'First Task' },
    { description: 'Second Task' },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TaskList</Text>
      {/* Task List Items */}
      <FlatList
        data={task}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101112',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
