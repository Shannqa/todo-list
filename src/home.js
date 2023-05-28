import { formatDuration } from "date-fns";
import { openTasks, allTasks, finishedTasks, projects, addTask } from ".";
export { renderTasks, closeModal };

const elements = [
  { short: "title", full: "Title" },
  { short: "description", full: "Description" },
  { short: "dueDate", full: "Due date" },
  { short: "priority", full: "Priority" },
  { short: "checklist", full: "Done?" },
  { short: "notes", full: "Notes" },
  { short: "project", full: "Project" },
];

const body = document.querySelector("body");

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "To Do List";
  body.appendChild(header);
}
function renderOpen() {
  renderTasks(openTasks);
}
function renderAll() {
  renderTasks(allTasks);
}
function renderFinished() {
  renderTasks(finishedTasks);
}
function createNav() {
  const nav = document.createElement("div");
  const navUl = document.createElement("ul");
  const navOpen = document.createElement("li");
  const navAll = document.createElement("li");
  const navFinished = document.createElement("li");
  const projectsDiv = document.createElement("div");
  const projectsUl = document.createElement("ul");

  nav.classList.add("navigation");
  navOpen.textContent = "Open tasks";
  navOpen.addEventListener("click", renderOpen);
  navAll.textContent = "All tasks";
  navAll.addEventListener("click", renderAll);
  navFinished.textContent = "Finished tasks";
  navFinished.addEventListener("click", renderFinished);

  projectsDiv.textContent = "Projects";
  projectsUl.classList.add("projects-nav");

  nav.appendChild(navUl);
  navUl.appendChild(navOpen);
  navUl.appendChild(navAll);
  navUl.appendChild(navFinished);
  projectsDiv.appendChild(projectsUl);
  nav.appendChild(projectsDiv);

  body.appendChild(nav);
}

export default function createDom() {
  createHeader();
  createNav();
  renderProjNav();

  /* Main */

  const main = document.createElement("div");

  /* Modal window for creating a new task */
  const modalWind = document.createElement("div");

  const form = document.createElement("form");
  main.classList.add("main");
  form.setAttribute("id", "form");
  modalWind.classList.add("modal");

  elements.forEach((item) => {
    const input = document.createElement("input");
    input.setAttribute("id", `${item.short}`);
    if (item.short === "checklist") {
      input.setAttribute("type", "checkbox");
      input.setAttribute("value", "done");
    }
    if (item.short === "priority") {
      input.setAttribute("type", "checkbox");
    }
    const label = document.createElement("label");
    label.setAttribute("for", `${item.short}`);
    label.textContent = `${item.full}`;
    form.appendChild(label);
    form.appendChild(input);
  });

  const submitBtn = document.createElement("button");
  submitBtn.addEventListener("click", addTask);
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  modalWind.appendChild(form);
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", closeModal);
  modalWind.appendChild(closeBtn);
  body.appendChild(modalWind);

  const tableDiv = document.createElement("div");
  tableDiv.classList.add("tableDiv");

  const addTaskBtn = document.createElement("button");
  addTaskBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";
  });
  addTaskBtn.classList.add("add-button");
  addTaskBtn.textContent = "+";

  main.appendChild(addTaskBtn);
  main.appendChild(tableDiv);
  body.appendChild(main);
  renderTasks();
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

/* */
function removeTable() {
  const tableDiv = document.querySelector(".tableDiv");
  while (tableDiv.lastChild) {
    tableDiv.removeChild(tableDiv.lastChild);
  }
}

function renderTasks(tasklist = openTasks) {
  const tableDiv = document.querySelector(".tableDiv");
  removeTable();
  const tableLabel = document.createElement("div");
  if (tasklist == allTasks) {
    tableLabel.textContent = "All tasks";
  } else if (tasklist == finishedTasks) {
    tableLabel.textContent = "Finished tasks";
  } else {
    tableLabel.textContent = "Open tasks";
  }

  const table = document.createElement("table");
  const tr = document.createElement("tr");
  elements.forEach((item) => {
    const th = document.createElement("th");
    th.textContent = `${item.full}`;
    tr.appendChild(th);
  });
  table.appendChild(tr);

  tasklist.forEach((item) => {
    for (const prop in item) {
      // console.log(item[prop]);
      const td = document.createElement("td");
      if (prop === "checklist") {
        const doneCheck = document.createElement("input");
        doneCheck.setAttribute("type", "checkbox");
        console.log(item[prop]);
        if (item[prop] === "true" || item[prop] === true) {
          doneCheck.checked = true;
        } else {
          doneCheck.checked = false;
        }
        td.appendChild(doneCheck);
      } else {
        td.textContent = `${item[prop]}`;
      }

      table.appendChild(td);
    }
    const tr = document.createElement("tr");
    table.appendChild(tr);
  });
  tableDiv.appendChild(tableLabel);
  tableDiv.appendChild(table);
}

function renderProjNav() {
  const ul = document.querySelector(".projects-nav");
  projects.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}`;
    ul.appendChild(li);
  });
}
