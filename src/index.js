import createDom, { renderTodos, closeModal } from "./home";
import "./style.css";
const kitty = "kitty";
export { openTodos, kitty, addTodo };

class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    checklist,
    notes,
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.notes = notes;
    this.project = project;
  }
}

const openTodos = [];

function addTodo(event) {
  const form = document.querySelector("#form");
  let newTodo = new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    checklist.value,
    notes.value,
    project.value
  );
  openTodos.push(newTodo);
  renderTodos();
  closeModal();
  console.log(openTodos);
  event.preventDefault();
}
const defTodo = new Todo(
  "brush teeth",
  "brush your teeth",
  "now",
  "high",
  "on",
  "no",
  "life"
);
openTodos.push(defTodo);
createDom();
