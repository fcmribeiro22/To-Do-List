// dom.js
import { addProjectToArray, getProjectsArray } from "./app.js";

export function addNewProject() {
  const projectsTabHeader = document.querySelector(".projects-tab-header");
  const projectsPopup = document.querySelector(".projects-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");
  const formContainer = document.querySelector(".form-container");

  projectsTabHeader.addEventListener("click", () => {
    projectsPopup.style.display = "flex";
    darkOverlay.style.display = "block";
  });

  const addProjectButton = document.querySelector(".submit-button");
  addProjectButton.addEventListener("click", () => {
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
}

export function printProject() {
  let newArray = getProjectsArray();
  const projectsContainer = document.querySelector(".project-container");
  for (let i = 0; i < newArray.length; i++) {
    const projectCreated = document.createElement("h2");
    projectCreated.classList.add("project-created");
    projectCreated.textContent = newArray[i];
    projectsContainer.appendChild(projectCreated);
  }
}
