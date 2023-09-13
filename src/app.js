import { createProject } from "./factory";

let projects = [];

// Load projects from localStorage if available when the app starts
const storedProjects = JSON.parse(localStorage.getItem("projects"));
if (storedProjects) {
  projects = storedProjects;
} else {
  // If there's no data in localStorage, initialize with a default project
  projects = [{ project: "General", tasks: [], selected: true }];
}

export function addProjectToArray(projectName) {
  const project = createProject(projectName);
  projects.push(project);
  updateLocalStorageProjects();
}

export function getProjectsArray() {
  return projects;
}

export function removeProject(index) {
  projects.splice(index, 1);
  updateLocalStorageProjects();
}

export function addTasktoProject(projectIndex, task) {
  projects[projectIndex].tasks.push(task);
  updateLocalStorageProjects();
}

function updateLocalStorageProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}
