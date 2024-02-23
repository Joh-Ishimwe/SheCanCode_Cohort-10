// Task constructor function
function Task(title, category) {
  this.title = title;
  this.category = category;
  this.completed = false;
}

// ToDoList constructor function
function ToDoList() {
  this.tasks = [];
}

// Function to find a task by title
ToDoList.prototype.findTask = function (title) {
  return this.tasks.find(task => task.title.toLowerCase() === title.toLowerCase());
};

// Function to add tasks to the ToDo list with specified categories
ToDoList.prototype.addTask = function (title, category) {
  const task = new Task(title, category);
  this.tasks.push(task);
};

// Function to display tasks grouped by their categories
ToDoList.prototype.displayTasksByCategory = function () {
  const tasksByCategory = {};

  this.tasks.forEach((task) => {
    if (!tasksByCategory[task.category]) {
      tasksByCategory[task.category] = [];
    }
    tasksByCategory[task.category].push(task);
  });

  console.log('Tasks by Category:');
  for (const category in tasksByCategory) {
    console.log(`Category: ${category}`);
    tasksByCategory[category].forEach((task) => {
      console.log(`  ${task.title} - ${task.completed ? 'Completed' : 'Not Completed'}`);
    });
  }
};

// Function to mark tasks as completed
ToDoList.prototype.completeTask = function (title) {
  const task = this.findTask(title);

  if (task) {
    task.completed = true;
    console.log(`Task "${task.title}" marked as completed.`);
  } else {
    console.log(`Task with title "${title}" not found in the ToDo list.`);
  }
};

// Function to remove tasks from the list
ToDoList.prototype.removeTask = function (title) {
  const taskIndex = this.tasks.findIndex((task) => task.title.toLowerCase() === title.toLowerCase());

  if (taskIndex !== -1) {
    this.tasks.splice(taskIndex, 1);
    console.log(`Task "${title}" removed from the ToDo list.`);
  } else {
    console.log(`Task with title "${title}" not found in the ToDo list.`);
  }
};

// Example usage:
const toDoList = new ToDoList();

toDoList.addTask('Buy groceries', 'Shopping');
toDoList.addTask('Finish homework', 'Study');
toDoList.addTask('Exercise', 'Health');
toDoList.addTask('Read a book', 'Leisure');

toDoList.displayTasksByCategory();

toDoList.completeTask('Buy groceries');
toDoList.completeTask('Read a book');

toDoList.displayTasksByCategory();

toDoList.removeTask('Finish homework');

toDoList.displayTasksByCategory();
