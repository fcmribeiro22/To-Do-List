export function createProject(project) {
  return { project, tasks: [] };
}

export function createTask(task, description, duedate) {
  return {
    task,
    description,
    duedate,
  };
}
