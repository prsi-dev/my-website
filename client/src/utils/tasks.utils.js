export const cleanString = (str) => str.trim().toLowerCase();

export const filterTasks = (tasks, filter) => {
  const cleanFilter = cleanString(filter);

  const filteredTasks = tasks.filter((task) => {
    return (
      cleanString(task.name).includes(cleanFilter) ||
      cleanString(task.description).includes(cleanFilter) ||
      cleanString(task.category).includes(cleanFilter)
    );
  });

  return filteredTasks;
};
