export function createProject(project) {
  return { project, tasks: [] };
}

export function createTask(taskName, dueDate, priority) {
  return {
    task: taskName,
    dueDate: dueDate,
    priority: priority,
    completed: false,
    toggleCompletion() {
      this.completed = !this.completed;
    },
  };
}
