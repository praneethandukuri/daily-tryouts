import createTaskManager from "./taskManager.js";

const taskManager = createTaskManager();
let taskStorage = "";

// Load tasks from a simulated file (in-memory storage)
if (taskStorage) {
  taskManager.importTasks(taskStorage);
}

// Example operations
taskManager.addTask("Learn JavaScript");
taskManager.addTask("Build a Task Manager");
console.log("All Tasks:", taskManager.viewTasks());

// Mark a task as complete
taskManager.markComplete(1);
console.log("After Marking Complete:", taskManager.viewTasks());

// Remove a task
taskManager.removeTask(2);
console.log("After Removing Task:", taskManager.viewTasks());

// Save tasks to a simulated file (in-memory storage)
taskStorage = taskManager.exportTasks();
console.log("Tasks saved to in-memory storage.");
