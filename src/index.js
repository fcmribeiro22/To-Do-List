function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  // Event listener to add a task when the "Add Task" button is clicked
  document.getElementById('add-task-btn').addEventListener('click', addTask);
  
  // Event listener to add a task when the "Enter" key is pressed in the input field
  document.getElementById('task-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });