export function createProject(project) {
  return { project, tasks: [], selected: false };
}

export function createTask(task, description, duedate) {
  return {
    task,
    description,
    duedate,
  };
}
