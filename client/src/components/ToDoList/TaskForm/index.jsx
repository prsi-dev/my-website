// De la librería uuid me importo la función v4 y la llamo uuid, para mantener un estándar en mi proyecto
import { v4 as uuid } from "uuid";

import useTextInput from "../../../hooks/useTextInput";

import "./styles.scss";

function TaskForm({ addTask }) {
  const [name, changeName, resetName] = useTextInput();
  const [category, changeCategory, resetCategory] = useTextInput();
  const [description, changeDescription, resetDescription] = useTextInput();

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      name,
      category,
      description,
      id: uuid(),
    };

    addTask(newTask);

    resetName();
    resetCategory();
    resetDescription();
  }

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Task Name</label>
      <input
        required
        type="text"
        name="name"
        value={name}
        onChange={changeName}
        placeholder="Hacer la compra"
      />
      <br />
      <label htmlFor="category">Category</label>
      <input
        required
        type="text"
        name="category"
        value={category}
        onChange={changeCategory}
        placeholder="Alimentación"
      />
      <br />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        value={description}
        onChange={changeDescription}
        placeholder="Lista de la compra..."
      />
      <br />

      <button type="submit">Create Task 🔖</button>
    </form>
  );
}

export default TaskForm;
