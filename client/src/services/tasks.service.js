import db from "../config/lowdb";

const TASKS_DB = "tasks";
const COMPLETED_DB = "completed";

export const getTasks = async () => {
  return db.get(TASKS_DB).value();
};

export const getCompleted = async () => {
  return db.get(COMPLETED_DB).value();
};

export const postTask = async (newTask) => {
  db.get(TASKS_DB).push(newTask).write();
};

export const putCompleteTask = async (task) => {
  db.get(TASKS_DB).remove({ id: task.id }).write();
  db.get(COMPLETED_DB).push(task).write();
};
