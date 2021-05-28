import "./styles.scss";

function TaskList({ tasks, completeTask }) {
  return (
    <ul className="TaskList">
      {tasks.map((task) => {
        return (
          <li key={task.id} className="TaskList__item">
            <h4>
              {task.category} - {task.name}
            </h4>

            <p>{task.description}</p>

            {completeTask ? (
              <button
                onClick={() => completeTask(task.id)}
                type="button"
                className="TaskList__button"
              >
                Done!
              </button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
