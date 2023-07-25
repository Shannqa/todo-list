// git subtree push --prefix dist origin gh-pages

import createDom, { renderTasks, closeModal } from "./home";
import "./style.css";
export { openTasks, allTasks, finishedTasks, projects, priorities, addTask };

const openTasks = [];
const allTasks = [];
const finishedTasks = [];
const projects = [];
const priorities = ["High", "Medium", "Low"];

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
    this._id = getTaskID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.notes = notes;
    this.project = project;
  }
}

/* Projects */
class Project {
  constructor(name) {
    this._name = name; 
    this._id = getProjectID();
    this._taskList = [];
    projects.push(this);
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value) {
    this._name = value;
    }
  }
  get taskList() {
    return this._taskList;
  }
  set taskList(value) {
    this._taskList.push(value);
  }
}

function getProjectID() {
  let randomNum = () => {
    return Math.floor((1 + Math.random())* 0x10000).toString(16).substring(1);
  };
  let randomID = randomNum() + randomNum() + randomNum() + randomNum();
  return randomID;
}

function getTaskID() {
  let randomNum = () => {
    return Math.floor((1 + Math.random())* 0x10000).toString(36).substring(1);
  };
  let randomID = randomNum() + randomNum() + randomNum() + randomNum() + randomNum();
  return randomID;
}

function addTask(event) {
  const form = document.querySelector("#form");
  const check = document.querySelector("#checklist");
  let newTask = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    check.checked,
    notes.value,
    project.value
  );
  console.log(newTask);
  openTasks.push(newTask);
  allTasks.push(newTask);
  renderTasks();
  closeModal();
  event.preventDefault();
}

function addProject(name) {
  let newProject = new Project(name);
}

const defaultProject = new Project("Default");
const workProject = new Project("Work");
addProject("Bob");

const defaultTask = new Task(
  "brush teeth",
  "brush your teeth",
  "now",
  "high",
  "true",
  "no",
  "Default"
);

openTasks.push(defaultTask);
allTasks.push(defaultTask);
createDom();
