import createDom, { renderTasks, closeModal } from "./home";
import "./style.css";
export { openTasks, addTask };

const openTasks = [];
const allTasks = [];
const finishedTasks = [];

class Task {
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

function addTask(event) {
  const form = document.querySelector("#form");
  let newTask = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    checklist.value,
    notes.value,
    project.value
  );
  openTasks.push(newTask);
  renderTasks();
  closeModal();
  console.log(openTasks);
  event.preventDefault();
}
const defaultTask = new Task(
  "brush teeth",
  "brush your teeth",
  "now",
  "high",
  "off",
  "no",
  "life"
);
openTasks.push(defaultTask);
createDom();
