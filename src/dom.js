// dom.js

export function handleProjectNameInput() {
  const projectsTabHeader = document.querySelector(".projects-tab-header");

  projectsTabHeader.addEventListener("click", () => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("placeholder", "Enter project name");
    console.log("clicked!");
  });
}
