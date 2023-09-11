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
  const projectArray = getProjectsArray();
  if (projectArray.length < 5 && projectName !== "") {
    addProjectToArray(projectName);
    projNameInput.value = "";
    renderProjects();
  } else {
    alert(
      "Maximum of 5 projects achieved. Upgrade to premium to get full access."
    );
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
    if (newArray[index].selected) {
      projectCard.classList.add("project-selected");
    }
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
  handleProjectSelectionEvent();
  console.log(newArray);
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

  const closeTaskButton = document.querySelector(".close-task-btn");
  closeTaskButton.addEventListener("click", closeTaskForm);
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
  const priority = document.getElementById("priority-switch").value;
  const projectDropdown = document.getElementById("projects-switch");
  const selectedProjectIndex = parseInt(projectDropdown.value);

  if (!taskNameInput || !taskDueDate) {
    alert("Please provide both a title and a due date for the task.");
    return;
  }

  const task = createTask(
    taskNameInput,
    taskDescription,
    taskDueDate,
    priority
  );
  addTasktoProject(selectedProjectIndex, task);

  closeTaskForm();
  renderTasksUI();
  console.log(projects);
}

function closeTaskForm() {
  const taskPopup = document.querySelector(".task-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");
  taskPopup.style.display = "none";
  darkOverlay.style.display = "none";
}

function handleProjectSelectionEvent() {
  const projects = document.querySelectorAll(".project-card");
  const projectArray = getProjectsArray();
  projects.forEach((project, index) => {
    project.addEventListener("click", () => {
      projectArray.forEach((project) => (project.selected = false));
      projectArray[index].selected = true;
      renderProjects();
      renderTasksUI();
    });
  });
}

function renderTasksUI() {
  let index = 0;
  const projectArray = getProjectsArray();
  const container = document.querySelector(".task-container");
  container.innerHTML = "";

  for (let i = 0; i < projectArray.length; i++) {
    if (projectArray[i].selected === true) {
      index = i;
    }
  }

  for (let i = 0; i < projectArray[index].tasks.length; i++) {
    if (projectArray[index].tasks[i].completed == false) {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");
      switch (projectArray[index].tasks[i].priority) {
        case "High":
          taskCard.classList.add("task-card-high-priority");
          break;
        case "Low":
          taskCard.classList.add("task-card-low-priority");
          break;
      }
      container.appendChild(taskCard);

      taskCard.addEventListener("click", () => {
        projectArray[index].tasks[i].toggleExpanded();
        renderTasksUI();
      });

      const title = document.createElement("h2");
      title.textContent = projectArray[index].tasks[i].task;
      taskCard.appendChild(title);

      const dueDate = document.createElement("p");
      dueDate.textContent = projectArray[index].tasks[i].duedate;
      taskCard.appendChild(dueDate);

      if (projectArray[index].tasks[i].expanded == true) {
        const description = document.createElement("p");
        description.style.display = "block";
        description.textContent = projectArray[index].tasks[i].description;
        taskCard.appendChild(description);
      }

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("task-complete-btn");
      deleteButton.textContent = "Click to complete";
      taskCard.appendChild(deleteButton);
      deleteButton.addEventListener("click", () => {
        projectArray[index].tasks[i].toggleCompletion();
        renderTasksUI();
      });
    }
  }
}
