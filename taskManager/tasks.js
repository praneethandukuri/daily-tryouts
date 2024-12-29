const createTask = function (id, description, isComplete = false) {
  return {
    id,
    description,
    isComplete,
    toString: function () {
      return `${id}|${description}|${isComplete}`;
    },
  };
};

const fromString = function (taskString) {
  const [id, description, isComplete] = taskString.split("|");
  return createTask(parseInt(id, 10), description, isComplete === "true");
};

export { createTask, fromString };
