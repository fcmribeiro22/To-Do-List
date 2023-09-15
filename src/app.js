import { createProject } from "./factory";

let projects = [];

const storedProjects = JSON.parse(localStorage.getItem("projects"));
if (storedProjects) {
  projects = storedProjects;
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      task.toggleExpanded = function () {
        this.expanded = !this.expanded;
      };
      task.toggleCompletion = function () {
        this.completed = !this.completed;
      };
    });
  });
} else {
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
