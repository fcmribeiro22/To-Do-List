import { createProject } from "./factory";

const projects = [{ project: "General", tasks: [], selected: true }];

export function addProjectToArray(projectName) {
  const project = createProject(projectName);
  projects.push(project);
}

export function getProjectsArray() {
  return projects;
}

export function removeProject(index) {
  projects.splice(index, 1);
}

export function addTasktoProject(projectIndex, task) {
  projects[projectIndex].tasks.push(task);
}
