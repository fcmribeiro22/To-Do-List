// dom.js
import {
  addProjectToArray,
  getProjectsArray,
  removeProject,
  addTasktoProject,
} from "./app.js";
import { createTask } from "./factory.js";

export function addNewProject() {
  const projectsTabHeader = document.querySelector(".projects-tab-header");
  const projectsPopup = document.querySelector(".projects-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");

  projectsTabHeader.addEventListener("click", () => {
    projectsPopup.style.display = "flex";
    darkOverlay.style.display = "block";
  });

  const addProjectButton = document.querySelector(".submit-button");
  const closeProjectFormbutton = document.querySelector(".close-button");
  addProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    const projNameInput = document.getElementById("proj-name");
    const projectName = projNameInput.value.trim();
    if (projectName !== "") {
      addProjectToArray(projectName);
      projNameInput.value = "";
      console.log(getProjectsArray());

      printProject();
    }
    projectsPopup.style.display = "none";
    darkOverlay.style.display = "none";
  });
  closeProjectFormbutton.addEventListener("click", () => {
    const projNameInput = document.getElementById("proj-name");
    projNameInput.value = "";
    projectsPopup.style.display = "none";
    darkOverlay.style.display = "none";
  });
}

export function printProject() {
  let newArray = getProjectsArray();
  const projectsContainer = document.querySelector(".project-container");
  projectsContainer.innerHTML = "";

  for (let i = 0; i < newArray.length; i++) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectsContainer.appendChild(projectCard);

    const projectCreated = document.createElement("h2");
    projectCreated.classList.add("project-created");
    projectCreated.textContent = newArray[i].project;
    projectCard.appendChild(projectCreated);

    const deleteButton = document.createElement("button");

    if (newArray.length > 1) {
      deleteButton.classList.add("project-delete-btn");
      deleteButton.textContent = "Remove";
      projectCard.appendChild(deleteButton);
    }

    deleteButton.addEventListener("click", () => {
      removeProject(i);
      printProject();
    });
  }
}

export function addNewTask() {
  const taskTabHeader = document.querySelector(".tasks-tab-header");
  const taskPopup = document.querySelector(".task-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");

  taskTabHeader.addEventListener("click", () => {
    taskPopup.style.display = "flex";
    darkOverlay.style.display = "block";
  });

  const addTaskButton = document.querySelector(".submit-task-btn");
  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const taskNameInput = document.getElementById("task-name").value;
    const taskDescription = document.getElementById("description-task").value;
    const taskDueDate = document.getElementById("due-date-task").value;
    const task = createTask(taskNameInput, taskDescription, taskDueDate);
    addTasktoProject(0, task);

    taskPopup.style.display = "none";
    darkOverlay.style.display = "none";
  });
}

export function sampleArrayonDom() {
  let newArray = getProjectsArray();
  const projectsContainer = document.querySelector(".project-container");
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectsContainer.appendChild(projectCard);
  const projectCreated = document.createElement("h2");
  projectCreated.classList.add("project-created");
  projectCreated.textContent = newArray[0].project;
  projectCard.appendChild(projectCreated);
}
