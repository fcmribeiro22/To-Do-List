// dom.js

export function addNewProject() {
  const projectsTabHeader = document.querySelector(".projects-tab-header");
  const projectsPopup = document.querySelector(".projects-form-popup");
  const darkOverlay = document.getElementById("darkOverlay");
  projectsTabHeader.addEventListener("click", () => {
    projectsPopup.style.display = "flex";
    darkOverlay.style.display = "block";
  });
}
