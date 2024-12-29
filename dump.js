const dueDateMessage = "What is the due date of the task? (YYYY-MM-DD format)";
const taskMessage = "What is the title of the task?";

const tasks = [];

const getUserInput = function (message) {
  return prompt(message);
};

const taskTitle = getUserInput(taskMessage);
const taskStatus = "pending";

const splitDate = function (date) {
  const [year, month, day] = date.split("-");

  return [+year, +month, +day];
};

const [year, month, day] = splitDate(getUserInput(dueDateMessage));

console.log([year, month, day]);