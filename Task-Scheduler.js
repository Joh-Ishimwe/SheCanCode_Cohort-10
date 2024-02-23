// Task constructor function
function Task(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }
  
  // Task scheduler constructor function
  function TaskScheduler() {
    this.tasks = [];
  }
  
  // Function to add tasks to the scheduler
  TaskScheduler.prototype.addTask = function (task) {
    this.tasks.push(task);
    this.sortTasksByDueDate();
  };
  
  // Function to display tasks sorted by due dates
  TaskScheduler.prototype.displayTasks = function () {
    console.log('Tasks:');
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} - Due Date: ${task.dueDate} - Completed: ${task.completed ? 'Yes' : 'No'}`);
    });
  };
  
  // Function to update task details or mark tasks as completed
  TaskScheduler.prototype.updateTask = function (index, updatedTask) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };
      this.sortTasksByDueDate();
      console.log('Task updated successfully.');
    } else {
      console.log('Invalid task index.');
    }
  };
  
  // Function to remove tasks from the scheduler
  TaskScheduler.prototype.removeTask = function (index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
      console.log('Task removed successfully.');
    } else {
      console.log('Invalid task index.');
    }
  };
  
  // Function to sort tasks by due dates
  TaskScheduler.prototype.sortTasksByDueDate = function () {
    this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  };
  
  // Example usage:
  const taskScheduler = new TaskScheduler();
  
  const task1 = new Task('Complete project', 'Finish coding the project', '2022-03-01');
  const task2 = new Task('Read a book', 'Read a new novel', '2022-02-15');
  const task3 = new Task('Exercise', 'Go for a run', '2022-02-20');
  
  taskScheduler.addTask(task1);
  taskScheduler.addTask(task2);
  taskScheduler.addTask(task3);
  
  taskScheduler.displayTasks();
  
  taskScheduler.updateTask(0, { completed: true });
  taskScheduler.updateTask(1, { dueDate: '2022-03-15' });
  
  taskScheduler.displayTasks();
  
  taskScheduler.removeTask(2);
  
  taskScheduler.displayTasks();
  