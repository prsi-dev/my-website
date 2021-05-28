import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Completed from "./Completed";
import useToggle from "../../hooks/useToggle";
import useTasks from "../../hooks/useTasks";
import useTextInput from "../../hooks/useTextInput";
import { filterTasks } from "../../utils/tasks.utils";

import "./ToDoList.scss";

function ToDoList({ theme }) {
  const { tasks, completed, addTask, completeTask } = useTasks();
  const [filter, changeFilter] = useTextInput("");

  const filteredTasks = filterTasks(tasks, filter, addTask);
  const filteredCompleted = filterTasks(completed, filter);
  const [formVisible, changeFormVisible] = useToggle();

  return (
    <main className="ToDoList">
      <input
        type="text"
        placeholder="Search🔎"
        value={filter}
        onChange={changeFilter}
      />

      <h1>All your pending tasks 📝</h1>

      <TaskList tasks={filteredTasks} completeTask={completeTask} />
      <button onClick={changeFormVisible}>
        {formVisible ? "Cancel ❌" : "Create task 🔖"}
      </button>
      {formVisible ? <TaskForm addTask={addTask} /> : null}
      <Completed completed={filteredCompleted} />
    </main>
  );
}

export default ToDoList;
