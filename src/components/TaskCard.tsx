import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
  id: string;
  task: string;
  completed: boolean;
  handleUpdateTask: (id: string) => void;
}
/* TARJETA PARA MOSTRAR TAREA E ICONO */
const TaskCard = ({id, task, completed, handleUpdateTask}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleUpdateTask(id)}>
      {/*  TAREA */}
      <Text style={styles.text}>{task.toUpperCase()}</Text>

      {/*  ICONO */}
      <Ionicons
        name="checkmark-circle"
        size={30}
        color={completed ? 'green' : 'gray'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  text: {fontSize: 15},
});
export default TaskCard;
