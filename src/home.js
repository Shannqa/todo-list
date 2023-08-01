// import { formatDuration } from "date-fns";
import { compareAsc, format } from "date-fns";
import { allTasks, projects, priorities, addTask, checkTasks } from ".";
import editIcon from './edit_icon.svg';
import deleteIcon from './delete_icon.svg';
import tasksAllImg from './tasks_all.svg';
import tasksDoneImg from './tasks_done.svg';
import tasksOpenImg from './tasks_open.svg';
import projectsImg from './projects_icon.svg';
export { renderTasks, closeModal };

const body = document.querySelector("body");
let editedTask = null;
let currentView = "open";

export default function createDom() {
  createHeader();
  createNav();
  renderProjNav();

  const main = document.createElement("div");
  main.classList.add("main");

  createModal()

  const tableDiv = document.createElement("div");
  tableDiv.classList.add("tableDiv");

  main.appendChild(tableDiv);
  body.appendChild(main);
  renderTasks(currentView);
}

function createModal() {
  /* Modal window for creating a new task */
  const modalWindow = document.createElement("div");
    
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", closeModal);
  modalWindow.appendChild(closeBtn);

  const form = document.createElement("form");

  form.setAttribute("id", "form");
  modalWindow.classList.add("modal");
  modalWindow.style.display = "none";

  //title
  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("id", "title");
  const labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.textContent = "Title";
  form.appendChild(labelTitle);
  form.appendChild(inputTitle);

  //description
  const inputDesc = document.createElement("input");
  inputDesc.setAttribute("id", "description");
  const labelDesc = document.createElement("label");
  labelDesc.setAttribute("for", "description");
  labelDesc.textContent = "Description";
  form.appendChild(labelDesc);
  form.appendChild(inputDesc);

  //due date
  const inputDue = document.createElement("input");
  inputDue.setAttribute("id", "dueDate");
  inputDue.setAttribute("type", "date");
  const labelDue = document.createElement("label");
  labelDue.setAttribute("for", "dueDate");
  labelDue.textContent = "Due Date";
  form.appendChild(labelDue);
  form.appendChild(inputDue);

  //priority
  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("id", "priority");
  priorities.forEach ((elem) => {
    let option = document.createElement("option");
    option.value = elem;
    option.textContent = elem;
    selectPriority.appendChild(option);
  });
  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "priority");
  labelPriority.textContent = "Priority";
  form.appendChild(labelPriority);
  form.appendChild(selectPriority);

  //project
  const selectProject = document.createElement("select");
  selectProject.setAttribute("id", "project");
  projects.forEach ((elem) => {
    let projOption = document.createElement("option");
    projOption.value = elem.name;
    projOption.textContent = elem.name;
    selectProject.appendChild(projOption);
  });
  const labelProject = document.createElement("label");
  labelProject.setAttribute("for", "project");
  labelProject.textContent = "Project";
  form.appendChild(labelProject);
  form.appendChild(selectProject);

  //checklist
  const inputCheck = document.createElement("input");
  inputCheck.setAttribute("id", "done");
  inputCheck.setAttribute("type", "checkbox");
  inputCheck.setAttribute("value", "false");
  const labelCheck = document.createElement("label");
  labelCheck.setAttribute("for", "done");
  labelCheck.textContent = "Done?";
  form.appendChild(labelCheck);
  form.appendChild(inputCheck);

  //notes
  const inputNotes = document.createElement("input");
  inputNotes.setAttribute("id", "notes");
  const labelNotes = document.createElement("label");
  labelNotes.setAttribute("for", "notes");
  labelNotes.textContent = "Additional notes";
  form.appendChild(labelNotes);
  form.appendChild(inputNotes);

  const submitBtn = document.createElement("button");
  submitBtn.addEventListener("click", (event) => {
    if (editedTask == null) {
      addTask();
    } else {
      editTask();
    }
  checkTasks();
  renderTasks(currentView);
  closeModal();
  event.preventDefault();
  });
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  modalWindow.appendChild(form);

  body.appendChild(modalWindow);
}

function showModal(taskID) {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  if (typeof taskID === "string") {
    renderEditedTask(taskID);
  }

}

function renderEditedTask(id) {
    let taskID = id;
    let searchedTask = allTasks.find((task) => task._id == taskID);
    editedTask = searchedTask;
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let dueDate = document.getElementById("dueDate");
    let project = document.getElementById("project");
    let done = document.getElementById("done");
    let notes = document.getElementById("notes");
    title.value = searchedTask.title;
    description.value = searchedTask.description;
    dueDate.value = searchedTask.dueDate;
    project.value = searchedTask.project;
    if (searchedTask.done == true) {
      done.checked = true;
    } else {
      done.checked = false;
    };
    notes.value = searchedTask.notes; 
  }
  
// edit task  
function editTask() {
  console.log(allTasks);
  editedTask.title = title.value;
  editedTask.description = description.value;
  editedTask.dueDate = dueDate.value;
  editedTask.project = project.value;
  if (done.checked) {
    editedTask.done = true;
  } else {
    editedTask.done = false;
  }
  editedTask.notes = notes.value;
  
  editedTask = null;
}

// delete task
function deleteTask(taskID) {
  let searchedTaskID = allTasks.findIndex((item) => item._id == taskID);
  allTasks.splice(searchedTaskID, 1);
  checkTasks();
  renderTasks("open");
}

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "To Do List";
  body.appendChild(header);
}

function createNav() {
  const nav = document.createElement("div");
  const navUl = document.createElement("div");
  const navView = document.createElement("div"); 
  const navOpenD = document.createElement("div");
  const navOpenS = document.createElement("span");
  const navAllD = document.createElement("div");
  const navAllS = document.createElement("span");
  const navFinishedD = document.createElement("div");
  const navFinishedS = document.createElement("span");
  const projectsDiv = document.createElement("div");
  const projectsD = document.createElement("div");
  const projectsUl = document.createElement("div");

  const tasksAllIcon = new Image();
  tasksAllIcon.src = tasksAllImg;
  const tasksOpenIcon = new Image();
  tasksOpenIcon.src = tasksOpenImg;
  const tasksDoneIcon = new Image();
  tasksDoneIcon.src = tasksDoneImg;
 
  nav.classList.add("navigation");
  navView.textContent = "Views";
  navView.classList.add("views-nav-label");
  nav.appendChild(navView);

  navOpenD.appendChild(tasksOpenIcon);
  navOpenS.textContent = "Open tasks";
  navOpenD.addEventListener("click", () => {currentView = "open"; renderTasks(currentView)});
  navAllD.appendChild(tasksAllIcon);
  navAllS.textContent = "All tasks";
  navAllD.addEventListener("click", () => {currentView = "all"; renderTasks(currentView)});
  navFinishedD.appendChild(tasksDoneIcon);
  navFinishedS.textContent = "Finished tasks";
  navFinishedD.addEventListener("click", () => {currentView = "finished"; renderTasks(currentView)});

  projectsD.textContent = "Projects";
  projectsD.classList.add("projects-nav-label");
  projectsUl.classList.add("projects-nav");

  nav.appendChild(navView);
  nav.appendChild(navUl);
  navOpenD.appendChild(navOpenS);
  navUl.appendChild(navOpenD);
  navAllD.appendChild(navAllS);
  navUl.appendChild(navAllD);
  navFinishedD.appendChild(navFinishedS);
  navUl.appendChild(navFinishedD);
  projectsDiv.appendChild(projectsD);
  projectsDiv.appendChild(projectsUl);
  nav.appendChild(projectsDiv);

  // add task button
  const addTaskBtn = document.createElement("button");
  addTaskBtn.addEventListener("click", () => {
    showModal();
  });
  addTaskBtn.classList.add("add-button");
  addTaskBtn.textContent = "+";
  nav.appendChild(addTaskBtn);

  body.appendChild(nav);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";

  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let dueDate = document.getElementById("dueDate");
  let project = document.getElementById("project");
  let done = document.getElementById("done");
  let notes = document.getElementById("notes");
  title.value = "";
  description.value = "";
  dueDate.value = "";
  project.value = "Default";
  done.checked = false;
  notes.value = "";
}

/* List of tasks */
function removeTable() {
  const tableDiv = document.querySelector(".tableDiv");
  while (tableDiv.lastChild) {
    tableDiv.removeChild(tableDiv.lastChild);
  }
}

function renderTasks(tasklist) {

  const tableDiv = document.querySelector(".tableDiv");
  removeTable();
  const tableLabel = document.createElement("div");
  tableLabel.setAttribute("class", "tablelabel");

  let list;
  if (tasklist === "open") {
    tableLabel.textContent = "Open tasks";
    list = allTasks.filter((task) => task.done === "false" || task.done === false);
  } else if (tasklist === "finished") {
    tableLabel.textContent = "Finished tasks";
    list = allTasks.filter((task) => task.done === "true" || task.done === true);
  } else if (tasklist === "all") {
    tableLabel.textContent = "All tasks";
    list = allTasks;
  }

  //sorting the tasks by due date
  list.sort((a, b) => {
    let dateA = new Date(a.dueDate);
    let dateB = new Date(b.dueDate);
    return dateA - dateB;
  });

  const table = document.createElement("table");
  
  list.forEach((item) => {
    const tr = document.createElement("tr");
    tr.dataset.index = item._id;

    //done state column
    const tdCheck = document.createElement("td");
    const doneCheck = document.createElement("input");
    doneCheck.setAttribute("type", "checkbox");
    doneCheck.setAttribute("class", "taskcheck");
    doneCheck.addEventListener("click", function changeDoneState() {
      if (this.checked) {
        item[done] = "true";
      } else {
        item[done] = "false";
      }
    });
    if (item[done] === "true" || item[done] === true) {
      doneCheck.checked = true;
    } else {
      doneCheck.checked = false;
    };
    tdCheck.appendChild(doneCheck);
    tr.appendChild(tdCheck);

    //title column
    const tdTitle = document.createElement("td");
    tdTitle.setAttribute("class", "tasktitle");
    tdTitle.textContent = item.title;
    tr.appendChild(tdTitle);

    //date column
    const tdDate = document.createElement("td")
    tdDate.setAttribute("class", "tddate");
    //human-readable date
    let humanDate = format(new Date(item.dueDate), "dd MMM");
    tdDate.textContent = humanDate;
    tr.appendChild(tdDate);

    //edit column
    const tdEdit = document.createElement("td");
    tdEdit.setAttribute("class", "tdedit");
    const imgEdit = new Image();
    imgEdit.src = editIcon;
    imgEdit.dataset.index = item._id;
    imgEdit.addEventListener("click", (event) => {
      let taskID = event.target.dataset.index;
            showModal(taskID);
    });
    tdEdit.appendChild(imgEdit);
    tr.appendChild(tdEdit);

    //delete column
    const tdDelete = document.createElement("td");
    tdDelete.setAttribute("class", "tddelete");
    const imgDelete = new Image();
    imgDelete.src = deleteIcon;
    imgDelete.dataset.index = item._id;
    imgDelete.addEventListener("click", (event) => {
      let taskID = event.target.dataset.index;
            deleteTask(taskID);
    });
    tdDelete.appendChild(imgDelete);
    tr.appendChild(tdDelete);

    table.appendChild(tr);    
  });
    tableDiv.appendChild(tableLabel);
    tableDiv.appendChild(table);
}

function renderProjNav() {
  const projUl = document.querySelector(".projects-nav");
  const projectsIcon = new Image();
  projectsIcon.src = projectsImg;


  for (let i = 0; i < projects.length; i++) {
    const projD = document.createElement("div");
    const projS = document.createElement("span");
    projD.classList.add("project-nav");
    projS.textContent = `${projects[i].name}`;
    projD.appendChild(projectsIcon.cloneNode());
    projD.appendChild(projS);
    projUl.appendChild(projD);
  };
}


