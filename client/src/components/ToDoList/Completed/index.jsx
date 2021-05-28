import TaskList from "../TaskList";

function Completed({ completed }) {
  return (
    <main>
      <h1>All your completed tasks ✅</h1>
      <TaskList tasks={completed} />
    </main>
  );
}

export default Completed;
