import { formatDuration } from "date-fns";
import { openTodos, kitty, addTodo } from ".";

const elements = [
  { short: "title", full: "Title" },
  { short: "description", full: "Description" },
  { short: "dueDate", full: "Due date" },
  { short: "priority", full: "Priority" },
  { short: "checklist", full: "Done?" },
  { short: "notes", full: "Notes" },
  { short: "project", full: "Project" },
];

export default function createDom() {
  const body = document.querySelector("body");

  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "To Do List";
  body.appendChild(header);

  const main = document.createElement("div");
  const modalWind = document.createElement("div");

  const form = document.createElement("form");
  main.classList.add("main");
  form.setAttribute("id", "form");
  modalWind.classList.add("modal");

  elements.forEach((item) => {
    const input = document.createElement("input");
    input.setAttribute("id", `${item.short}`);
    if (item === "checklist") {
      input.setAttribute("type", "checkbox");
    }
    const label = document.createElement("label");
    label.setAttribute("for", `${item.short}`);
    label.textContent = `${item.full}`;
    form.appendChild(label);
    form.appendChild(input);
  });

  const submitBtn = document.createElement("button");
  submitBtn.addEventListener("click", addTodo);
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
  renderTodos();
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function removeTable() {
  const tableDiv = document.querySelector(".tableDiv");
  while (tableDiv.lastChild) {
    tableDiv.removeChild(tableDiv.lastChild);
  }
}

function renderTodos() {
  const tableDiv = document.querySelector(".tableDiv");
  removeTable();
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  elements.forEach((item) => {
    const th = document.createElement("th");
    th.textContent = `${item.full}`;
    tr.appendChild(th);
  });
  table.appendChild(tr);

  openTodos.forEach((item) => {
    for (const prop in item) {
      console.log(item[prop]);
      const td = document.createElement("td");
      td.textContent = `${item[prop]}`;
      table.appendChild(td);
    }
    const tr = document.createElement("tr");
    table.appendChild(tr);
  });
  console.log(openTodos);
  console.log(kitty);
  tableDiv.appendChild(table);
}

export { renderTodos, closeModal };
