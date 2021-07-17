/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Button} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import TaskCard from '../components/TaskCard';
import TitleTask from '../components/TitleTask';

interface ITask {
  id: string;
  task: string;
  completed: boolean;
}

const TaskScreen = () => {
  /*  TAREAS */
  const [tasks, setTasks] = useState<ITask[]>([]);
  /* TAREA DE TEXT INPUT */
  const [task, setTask] = useState<string>('');

  /* REGISTRO DE TAREA */
  const handleTask = () => {
    if (task !== '') {
      setTasks([
        ...tasks,
        {
          id: uuid(),
          task: task,
          completed: false,
        },
      ]);
      setTask('');
    }
  };

  /* ACTUALIZAMOS ESTADO DE TAREA */
  const handleUpdateTask = (id: string) => {
    /*  OBTENEMOS LA TAREA A ACTUALIZAR */
    const taskCompleted = tasks.find((taskOne: ITask) => taskOne.id === id);

    /* GUARDAMOS LAS TAREAS Y A LA VEZ ACTUALIZAMOS EL ESTADO DE TAREA */
    setTasks([
      ...tasks.filter((taskFilter: ITask) => taskFilter.id !== id),
      {
        ...taskCompleted,
        completed: !taskCompleted.completed,
      },
    ]);
  };

  /* ELIMINAMOS NUESTRAS TAREAS */
  const handleDelTask = async () => {
    await AsyncStorage.removeItem('tasks');
    setTasks([]);
    setTask('');
  };

  /*  CUANDO INICE LA APLICACION OBTENDRA DEL ASYNCSTORAGE LAS TAREAS */
  useEffect(() => {
    getTaskFromStorage();
  }, []);

  /* GUARDAMOS EN ASYNCSTORAGE NUESTRO ARREGLO DE TAREAS */
  useEffect(() => {
    setTaskToStorage();
  }, [tasks]);

  /* METODO PARA OBTENER TAREAS DE ASYNCSTORAGE */
  const getTaskFromStorage = async () => {
    const tasksStorage = await AsyncStorage.getItem('tasks');
    if (tasksStorage !== null) {
      setTasks(JSON.parse(tasksStorage));
    }
  };

  /* METODO PARA GUARDAR TAREAS EN ASYNCSTORAGE */
  const setTaskToStorage = async () => {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/*  BOTON PARA LIMPIAR TAREAS */}
        <Button
          title="Limpiar Tareas"
          color="red"
          onPress={() => handleDelTask()}
        />

        {/*  INPUT PARA ESCRIBIR TAREA */}
        <TextInput
          style={styles.textInput}
          placeholder="Escriba Tarea a Realizar"
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        {/*  BOTON PARA REGISTRAR TAREA */}
        <Button title="Registrar Tarea" onPress={() => handleTask()} />
        <TitleTask title={'TAREAS PENDIENTES'} />

        {/*  TARJETA DE TAREAS PENDIENTES */}
        {tasks.map(
          (item: ITask, index: number) =>
            !item.completed && (
              <TaskCard
                key={index}
                {...item}
                handleUpdateTask={handleUpdateTask}
              />
            ),
        )}

        <TitleTask title={'TAREAS COMPLETAS'} />

        {/*  TARJETA DE TAREAS COMPLETADAS */}
        {tasks.map(
          (item: ITask, index: number) =>
            item.completed && (
              <TaskCard
                key={index}
                {...item}
                handleUpdateTask={handleUpdateTask}
              />
            ),
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, marginHorizontal: 20},
  textInput: {
    marginVertical: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
export default TaskScreen;
