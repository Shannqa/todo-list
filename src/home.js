import { formatDuration } from "date-fns";
import { openTodos, kitty } from ".";

const elements = [
  "title",
  "description",
  "dueDate",
  "priority",
  "checklist",
  "notes",
  "project",
];
// class FormElem {
//   constructor(short, full) {
//     this.short = short;
//     this.full = full;
//   }

// }
// const title = new FormElem("title", "title");
// const description = new FormElem("desc", "description");
// const dueDate = new FormElem("desc", "description");
// const dueDate = new FormElem("desc", "description");
// const dueDate = new FormElem("desc", "description");
// const dueDate = new FormElem("desc", "description");

export default function createDom() {
  const body = document.querySelector("body");
  const main = document.createElement("div");
  const form = document.createElement("form");

  const titleField = document.createElement("input");
  const titleLabel = document.createElement("label");
  const descField = document.createElement("input");
  const descLabel = document.createElement("label");
  const dueField = document.createElement("input");
  const dueLabel = document.createElement("label");
  const priorField = document.createElement("input");
  const priorLabel = document.createElement("label");
  const checkField = document.createElement("input");
  const checkLabel = document.createElement("label");
  const notesField = document.createElement("input");
  const notesLabel = document.createElement("label");
  const projField = document.createElement("input");
  const projLabel = document.createElement("label");
  const submitBtn = document.createElement("button");

  main.classList.add("main");
  form.setAttribute("id", "form");

  titleField.setAttribute("id", "title");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";
  descField.setAttribute("id", "description");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description";
  dueField.setAttribute("id", "dueDate");
  dueLabel.setAttribute("for", "dueDate");
  dueLabel.textContent = "Due date";
  priorField.setAttribute("id", "priority");
  priorLabel.setAttribute("for", "priority");
  priorLabel.textContent = "Priority";
  checkField.setAttribute("id", "checklist");
  checkField.setAttribute("type", "checkbox");
  checkLabel.setAttribute("for", "checklist");
  checkLabel.textContent = "Done?";
  notesField.setAttribute("id", "notes");
  notesLabel.setAttribute("for", "notes");
  notesLabel.textContent = "Notes";
  projField.setAttribute("id", "project");
  projLabel.setAttribute("for", "project");
  projLabel.textContent = "Project";
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "Submit";

  form.appendChild(titleLabel);
  form.appendChild(titleField);
  form.appendChild(descLabel);
  form.appendChild(descField);
  form.appendChild(dueLabel);
  form.appendChild(dueField);
  form.appendChild(priorLabel);
  form.appendChild(priorField);
  form.appendChild(checkLabel);
  form.appendChild(checkField);
  form.appendChild(notesLabel);
  form.appendChild(notesField);
  form.appendChild(projLabel);
  form.appendChild(projField);
  form.appendChild(submitBtn);
  main.appendChild(form);

  const tableDiv = document.createElement("div");
  tableDiv.classList.add("tableDiv");
  main.appendChild(tableDiv);
  body.appendChild(main);

  renderTodos();
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
    th.textContent = `${item}`;
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

export { renderTodos };
