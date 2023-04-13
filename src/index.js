import createDom, { renderTasks, closeModal } from "./home";
import "./style.css";
export { openTasks, allTasks, finishedTasks, projects, addTask };

const openTasks = [];
const allTasks = [];
const finishedTasks = [];
const projects = [];

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

class Project {
  constructor(name) {
    this.name = name;
    projects.push(this);
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
  allTasks.push(newTask);
  renderTasks();
  closeModal();
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

const defaultProject = new Project("Work");
openTasks.push(defaultTask);
allTasks.push(defaultTask);
createDom();
