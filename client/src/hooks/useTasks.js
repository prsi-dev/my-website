import { useState, useEffect } from "react";

import {
  getTasks,
  getCompleted,
  postTask,
  putCompleteTask,
} from "../services/tasks.service";

// 1. Comunicar states y renders de componentes
// 2. Comunicar los cambios de state a mi DB

// Custom Hook
function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    // Puedo hacer tantas requests en paralelo como quiera a una api
    getTasks()
      .then((response) => {
        setTasks(response);
      })
      .catch((err) => {
        console.log(err);
      });

    getCompleted()
      .then((response) => {
        setCompleted(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function addTask(newTask) {
    setTasks([...tasks, newTask]);

    // Actualizar en la db que he creado un task
    await postTask(newTask);
  }

  async function completeTask(id) {
    // 1. Encontrar la tarea de tasks que quiero completar y sacarla del array (find)
    const taskToComplete = tasks.find((task) => {
      return task.id === id;
    });

    // 2. Actualizar tasks para que NO tenga esa tarea dentro (filter)
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTasks);

    // 3. Introducir el task que hemos sacado de tasks en completed
    setCompleted([...completed, taskToComplete]);

    // Actualizar en la DB la tarea completada
    await putCompleteTask(taskToComplete);
  }

  // Este return nos lo inventamos
  return { tasks, completed, addTask, completeTask };
}

export default useTasks;
