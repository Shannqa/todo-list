// git subtree push --prefix dist origin gh-pages

import createDom from "./home";
import "./style.css";
export { allTasks, projects, priorities, addTask, checkTasks, addProject };

const allTasks = [];
const projects = [];
const priorities = ["High", "Medium", "Low"];

class Task {
  constructor(
    title,
    description,
    dueDate,
    priority,
    done,
    notes,
    project
  ) {
    this._id = getTaskID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = done;
    this.notes = notes;
    this.project = project;
    allTasks.push(this);
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

function addTask() {
  const form = document.querySelector("#form");
  const done = document.querySelector("#done");
  let newTask = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    done.checked,
    notes.value,
    project.value
  );
  console.log(newTask);

  allTasks.push(newTask);
}

function checkTasks() {
  let finished = allTasks.filter((task) => task.done === "true" || task.done === true);
  let open = allTasks.filter((task) => task.done === "false" || task.done === false);
}


function addProject() {
  const form = document.querySelector("#project-form");
  let newProject = new Project(newProjectName.value);
  console.log(newProject);
}

const defaultProject = new Project(
  "Default"
);

const workProject = new Project(
  "Work"
);

const tripsProject = new Project(
  "Trips"
);


const default1Task = new Task(
  "Doctor's appointment",
  "The appointment starts at 13, be there 30 mins before that.",
  "2023-08-07",
  "Medium",
  "true",
  "Have my recent lab results with me.",
  "Default"
);

const default2Task = new Task(
  "Buy some veggies",
  "Maybe some tomatoes, carrots and brussel sprouts.",
  "2023-08-09",
  "Low",
  "false",
  "",
  "Default"
);

const trip1Task = new Task(
  "Flight to Australia",
  "Be at the gate by 11, the plane leaves at 12:30.",
  "2023-08-30",
  "High",
  "false",
  "Don't forget to take the passport!",
  "Trips"
);


const trip2Task = new Task(
  "Flight back home",
  "Be at the gate by 17, the plane leaves at 18:15.",
  "2023-09-15",
  "High",
  "false",
  "Make sure to have enough water for the flight.",
  "Trips"
);

const work1Task = new Task(
  "Finish the ToDo website!",
  "Still plenty to do! Most form fields should be required, the font needs a change.",
  "2023-08-17",
  "Medium",
  "false",
  "",
  "Work"
);

// allTasks.push(defaultTask);
createDom();
