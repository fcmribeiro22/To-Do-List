import { createProject, createTask } from "./factory";

const projects = [];

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
