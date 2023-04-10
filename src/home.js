import { formatDuration } from "date-fns";

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
  body.appendChild(main);
}
