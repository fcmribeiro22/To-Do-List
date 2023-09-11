import { format, addDays } from "date-fns";

export function createProject(project) {
  return { project, tasks: [], selected: false };
}

export function createTask(task, description, duedate, priority) {
  const today = format(new Date(), "yyyy-MM-dd");

  return {
    task,
    description,
    duedate,
    creation: today,
    priority,
    completed: false,
    toggleCompletion: function () {
      this.completed = !this.completed;
    },
  };
}
