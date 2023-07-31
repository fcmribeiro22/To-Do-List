const projects = [];

export function addProjectToArray(projectName) {
  projects.push(projectName);
}

export function getProjectsArray() {
  return projects;
}

export function removeProject(index) {
  projects.splice(index, 1);
}
