import { createTask, fromString } from "./task.js";

const createTaskManager = function () {
  const tasks = [];

  const addTask = function (description) {
    const id = tasks.length + 1;
    const task = createTask(id, description);
    tasks.push(task);
    return task;
  };

  const viewTasks = function () {
    return tasks;
  };

  const markComplete = function (id) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.isComplete = true;
    }
    return task;
  };

  const removeTask = function (id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  };

  const exportTasks = function () {
    return tasks.map((task) => task.toString()).join("\n");
  };

  const importTasks = function (taskString) {
    const lines = taskString.split("\n");
    tasks.splice(0, tasks.length, ...lines.map(fromString));
  };

  return {
    addTask,
    viewTasks,
    markComplete,
    removeTask,
    exportTasks,
    importTasks,
  };
};

export default createTaskManager;
