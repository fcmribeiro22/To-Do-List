import {
  addProjectToArray,
  getProjectsArray,
  removeProject,
  addTasktoProject,
} from "./app.js";
import { createTask } from "./factory.js";

export function initiateApp() {
  setupUIElements();
  renderProjects();
}

function setupUIElements() {
  setupProjectsUI();
  setupTasksUI();
}

function setupProjectsUI() {
  const projectsTabHeader = document.querySelector(".projects-tab-header");
  const projectsPopup = document.querySelector(".projects-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");

  projectsTabHeader.addEventListener("click", () => {
    projectsPopup.style.display = "flex";
    darkOverlay.style.display = "block";
  });

  const addProjectButton = document.querySelector(".submit-button");
  const closeProjectFormbutton = document.querySelector(".close-button");
  addProjectButton.addEventListener("click", handleProjectAddition);
  closeProjectFormbutton.addEventListener("click", closeProjectForm);
}

function handleProjectAddition(event) {
  event.preventDefault();
  const projNameInput = document.getElementById("proj-name");
  const projectName = projNameInput.value.trim();
  if (projectName !== "") {
    addProjectToArray(projectName);
    projNameInput.value = "";
    renderProjects();
  }
  closeProjectForm();
}

function closeProjectForm() {
  const projNameInput = document.getElementById("proj-name");
  projNameInput.value = "";
  const projectsPopup = document.querySelector(".projects-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");
  projectsPopup.style.display = "none";
  darkOverlay.style.display = "none";
}

function renderProjects() {
  let newArray = getProjectsArray();
  const projectsContainer = document.querySelector(".project-container");
  projectsContainer.innerHTML = "";

  newArray.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectsContainer.appendChild(projectCard);

    const projectCreated = document.createElement("h2");
    projectCreated.classList.add("project-created");
    projectCreated.textContent = project.project;
    projectCard.appendChild(projectCreated);

    if (newArray.length > 1) {
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("project-delete-btn");
      deleteButton.textContent = "Remove";
      projectCard.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        handleProjectRemoval(index);
      });
    }
  });
}

function handleProjectRemoval(index) {
  removeProject(index);
  renderProjects();
}

function setupTasksUI() {
  const taskTabHeader = document.querySelector(".tasks-tab-header");
  const taskPopup = document.querySelector(".task-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");

  taskTabHeader.addEventListener("click", () => {
    taskPopup.style.display = "flex";
    darkOverlay.style.display = "block";
    setupTaskForm();
  });

  const addTaskButton = document.querySelector(".submit-task-btn");
  addTaskButton.addEventListener("click", handleTaskAddition);
}

function setupTaskForm() {
  const taskNameInput = document.getElementById("task-name");
  const taskDescription = document.getElementById("description-task");
  const taskDueDate = document.getElementById("due-date-task");
  taskNameInput.value = "";
  taskDescription.value = "";
  taskDueDate.value = "";

  const projectDropdown = document.getElementById("projects-switch");
  projectDropdown.innerHTML = "";

  const projects = getProjectsArray();
  projects.forEach((project, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = project.project;
    projectDropdown.appendChild(option);
  });
}

function handleTaskAddition(event) {
  const projects = getProjectsArray();
  event.preventDefault();
  const taskNameInput = document.getElementById("task-name").value;
  const taskDescription = document.getElementById("description-task").value;
  const taskDueDate = document.getElementById("due-date-task").value;
  const projectDropdown = document.getElementById("projects-switch");
  const selectedProjectIndex = parseInt(projectDropdown.value);

  const task = createTask(taskNameInput, taskDescription, taskDueDate);
  addTasktoProject(selectedProjectIndex, task);

  closeTaskForm();
  renderTasks();
  console.log(projects);
}

function closeTaskForm() {
  const taskPopup = document.querySelector(".task-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");
  taskPopup.style.display = "none";
  darkOverlay.style.display = "none";
}

function renderTasks() {
  const projects = getProjectsArray();
  const container = document.querySelector(".task-container");
  container.innerHTML = "";

  projects.forEach((project) => {
    const projectName = project.project;

    project.tasks.forEach((task) => {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");
      container.appendChild(taskCard);

      const taskCreated = document.createElement("h2");
      taskCreated.classList.add("task-created");
      taskCreated.textContent = `Project: ${projectName}, Task: ${task.name}`;
      taskCard.appendChild(taskCreated);
    });
  });
}
