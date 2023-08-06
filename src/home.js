// import { formatDuration } from "date-fns";
import { compareAsc, format } from "date-fns";
import { allTasks, projects, priorities, addTask, checkTasks, addProject } from ".";
import editIcon from './edit_icon.svg';
import deleteIcon from './delete_icon.svg';
import tasksAllImg from './tasks_all.svg';
import tasksDoneImg from './tasks_done.svg';
import tasksOpenImg from './tasks_open.svg';
import projectsImg from './projects_icon.svg';
export { renderTasks, closeModal };

//to do:
//footer
//change the font
//adding/removing projects. might add add project to the add task modal
//date should be required, set up default date for today. add constraint validation
//mobile view


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
  modalWindow.classList.add("modal");
  modalWindow.style.display = "none";  

  const modalTop = document.createElement("div");
  modalTop.classList.add("modal-top");
  const modalTopLeft = document.createElement("div");
  modalTopLeft.classList.add("modal-top-left");

  const modalLabel = document.createElement("div");
  modalLabel.textContent = "Add a Task";
  modalLabel.addEventListener("click", showModal)
  modalLabel.classList.add("modal-label");
  modalTopLeft.appendChild(modalLabel);

  const modalProjLabel = document.createElement("div");
  modalProjLabel.textContent = "Add a Project";
  modalProjLabel.classList.add("modal-proj-label");
  modalProjLabel.addEventListener("click", renderNewProject)
  modalTopLeft.appendChild(modalProjLabel);

  modalTop.appendChild(modalTopLeft);
  
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.textContent = "X";
  closeBtn.addEventListener("click", closeModal);
  modalTop.appendChild(closeBtn);

  modalWindow.appendChild(modalTop);

  //task's form
  const form = document.createElement("form");
  form.setAttribute("id", "form");

  const modalLeft = document.createElement("div");
  const modalRight = document.createElement("div");

  //title
  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("id", "title");
  const labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.textContent = "Title:";
  modalLeft.appendChild(labelTitle);
  modalLeft.appendChild(inputTitle);

  //due date
  const inputDue = document.createElement("input");
  inputDue.setAttribute("id", "dueDate");
  inputDue.setAttribute("type", "date");
  const labelDue = document.createElement("label");
  labelDue.setAttribute("for", "dueDate");
  labelDue.textContent = "Due Date:";
  modalLeft.appendChild(labelDue);
  modalLeft.appendChild(inputDue);

  //description
  const inputDesc = document.createElement("textarea");
  inputDesc.setAttribute("id", "description");
  const labelDesc = document.createElement("label");
  labelDesc.setAttribute("for", "description");
  labelDesc.textContent = "Description:";
  modalLeft.appendChild(labelDesc);
  modalLeft.appendChild(inputDesc);

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
  labelPriority.textContent = "Priority:";
  modalRight.appendChild(labelPriority);
  modalRight.appendChild(selectPriority);

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
  labelProject.textContent = "Project:";
  modalRight.appendChild(labelProject);
  modalRight.appendChild(selectProject);

  //notes
  const inputNotes = document.createElement("textarea");
  inputNotes.setAttribute("id", "notes");
  const labelNotes = document.createElement("label");
  labelNotes.setAttribute("for", "notes");
  labelNotes.textContent = "Additional notes:";
  modalRight.appendChild(labelNotes);
  modalRight.appendChild(inputNotes);

  form.appendChild(modalLeft);
  form.appendChild(modalRight);  

  //checklist
  const inputCheck = document.createElement("input");
  inputCheck.setAttribute("id", "done");
  inputCheck.setAttribute("type", "checkbox");
  inputCheck.setAttribute("value", "false");
  const labelCheck = document.createElement("label");
  labelCheck.setAttribute("for", "done");
  labelCheck.textContent = "Task complete?";
  form.appendChild(labelCheck);
  form.appendChild(inputCheck);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-button");
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

  //project's form
  const projectForm = document.createElement("form");
  projectForm.setAttribute("id", "project-form");

  const inputNewProject = document.createElement("input");
  inputNewProject.setAttribute("id", "newProjectName");
  const labelNewProject = document.createElement("label");
  labelNewProject.setAttribute("for", "newProjectName");
  labelNewProject.textContent = "Project's Name:";
  projectForm.appendChild(labelNewProject);
  projectForm.appendChild(inputNewProject);

  const submitProjBtn = document.createElement("button");
  submitProjBtn.classList.add("submit-button");
  submitProjBtn.addEventListener("click", (event) => {
  addProject();
  renderProjNav();
  closeModal();
  event.preventDefault();
  });
  submitProjBtn.setAttribute("id", "submitProj");
  submitProjBtn.textContent = "Submit";
 
  projectForm.appendChild(submitProjBtn);

  modalWindow.appendChild(projectForm);
  body.appendChild(modalWindow);
}

function renderNewProject() {
  const form = document.querySelector("#form");
  form.style.display = "none";
  const modalProjLabel = document.querySelector(".modal-proj-label");
  const modalLabel = document.querySelector(".modal-label");
  modalLabel.classList.remove("modal-label-active");
  modalProjLabel.classList.add("modal-label-active");
  modalLabel.classList.add("modal-label-inactive");
  modalProjLabel.classList.remove("modal-label-inactive");
  const projectForm = document.querySelector("#project-form");
  projectForm.style.display = "grid";
}
 
function showModal(taskID) {
  const modal = document.querySelector(".modal");
  const modalProjLabel = document.querySelector(".modal-proj-label");
  const modalLabel = document.querySelector(".modal-label");
  modalLabel.classList.add("modal-label-active");
  modalProjLabel.classList.remove("modal-label-active");
  modalLabel.classList.remove("modal-label-inactive");
  modalProjLabel.classList.add("modal-label-inactive");
  modal.style.display = "grid";
  form.style.display = "grid";
  const projectForm = document.querySelector("#project-form");
  projectForm.style.display = "none";

  if (typeof taskID === "string") {
    renderEditedTask(taskID);
  } else {
    renderEmptyTask();
  }
}

function renderEmptyTask() {
  let modalLabel = document.querySelector(".modal-label")
  modalLabel.textContent = "Add a Task"
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
    let modalLabel = document.querySelector(".modal-label")
    modalLabel.textContent = "Edit a Task"
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
  let newProjectName = document.getElementById("newProjectName");
  title.value = "";
  description.value = "";
  dueDate.value = "";
  project.value = "Default";
  done.checked = false;
  notes.value = "";
  newProjectName.value = ""; 
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
  const containerLabel = document.createElement("div");
  containerLabel.setAttribute("class", "tablelabel");

  let list;
  if (tasklist === "open") {
    containerLabel.textContent = "Open tasks";
    list = allTasks.filter((task) => task.done === "false" || task.done === false);
  } else if (tasklist === "finished") {
    containerLabel.textContent = "Finished tasks";
    list = allTasks.filter((task) => task.done === "true" || task.done === true);
  } else if (tasklist === "all") {
    containerLabel.textContent = "All tasks";
    list = allTasks;
  }

  //sorting the tasks by due date
  list.sort((a, b) => {
    let dateA = new Date(a.dueDate);
    let dateB = new Date(b.dueDate);
    return dateA - dateB;
  });

  //list of tasks
  const container = document.createElement("div");
  container.classList.add("container");
  
  list.forEach((item) => {
    const taskRow = document.createElement("div");
    taskRow.classList.add("task-row");
    taskRow.dataset.index = item._id;
    
    //left column
    const taskLeft = document.createElement("div");
    taskLeft.classList.add("left-right");
    //done state column
    const taskCheck = document.createElement("div");
    const doneCheck = document.createElement("input");
    doneCheck.setAttribute("type", "checkbox");
    doneCheck.setAttribute("class", "task-check");
    doneCheck.addEventListener("click", function changeDoneState() {
      if (this.checked) {
        item.done = true;
        taskRow.classList.add("task-done");
      } else {
        item.done = false;
        taskRow.classList.remove("task-done");
      }
      checkTasks();
    });
    if (item.done == true) {
      doneCheck.checked = true;
    } else {
      doneCheck.checked = false;
    };
    taskCheck.appendChild(doneCheck);
    taskLeft.appendChild(taskCheck);

    //title column
    const taskTitle = document.createElement("div");
    taskTitle.setAttribute("class", "task-title");
    taskTitle.textContent = item.title;
    taskTitle.addEventListener("click", () => {
      detailsRow.classList.toggle("details-row-hidden");
    });
    taskLeft.appendChild(taskTitle);
    
    //right column
    const taskRight = document.createElement("div");
    taskRight.classList.add("left-right");
    //date column
    const taskDate = document.createElement("div")
    taskDate.classList.add("task-date");
    //human-readable date
    let humanDate = format(new Date(item.dueDate), "dd MMM");
    taskDate.textContent = humanDate;
    taskRight.appendChild(taskDate);
    //priority column
    const taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.classList.add("task-priority-div");
    const taskPriority = document.createElement("div");
    taskPriority.textContent = item.priority;
    taskPriority.classList.add("task-priority");
    if (item.priority == "High") {
      taskPriority.classList.add("task-priority-high");
    } else if (item.priority == "Medium") {
      taskPriority.classList.add("task-priority-medium");
    } else {
      taskPriority.classList.add("task-priority-low");
    }
    taskPriorityDiv.appendChild(taskPriority);
    taskRight.appendChild(taskPriorityDiv);

    //edit column
    const taskEdit = document.createElement("div");
    taskEdit.classList.add("task-edit");
    const imgEdit = new Image();
    imgEdit.src = editIcon;
    imgEdit.dataset.index = item._id;
    imgEdit.addEventListener("click", (event) => {
      let taskID = event.target.dataset.index;
            showModal(taskID);
    });
    taskEdit.appendChild(imgEdit);
    taskRight.appendChild(taskEdit);

    //delete column
    const taskDelete = document.createElement("div");
    taskDelete.classList.add("task-delete");
    const imgDelete = new Image();
    imgDelete.src = deleteIcon;
    imgDelete.dataset.index = item._id;
    imgDelete.addEventListener("click", (event) => {
      let taskID = event.target.dataset.index;
            deleteTask(taskID);
    });
    taskDelete.appendChild(imgDelete);
    taskRight.appendChild(taskDelete);

    taskRow.appendChild(taskLeft);
    taskRow.appendChild(taskRight);
    container.appendChild(taskRow);

    //details row
    const detailsRow = document.createElement("div");
    const detailsTitle = document.createElement("div");
    const detailsDate = document.createElement("div");
    const detailsDescription = document.createElement("div");
    const detailsPriority = document.createElement("div");
    const detailsProject = document.createElement("div");
    const detailsNotes = document.createElement("div");

    detailsRow.classList.add("details-row");
    detailsRow.classList.add("details-row-hidden");
    detailsTitle.textContent = "Title: " + item.title;
    detailsDate.textContent = "Due date: " + item.dueDate;
    
    detailsDescription.textContent = "Description: " + item.description;
    detailsPriority.textContent = "Priority: " + item.priority;
    detailsProject.textContent = "Project: " + item.project;
    detailsNotes.textContent = "Notes: " + item.notes;

    detailsRow.appendChild(detailsTitle);
    detailsRow.appendChild(detailsDate);    
    detailsRow.appendChild(detailsPriority);
    detailsRow.appendChild(detailsProject);
    detailsRow.appendChild(detailsDescription);
    detailsRow.appendChild(detailsNotes);
    container.appendChild(detailsRow);
  });


    tableDiv.appendChild(containerLabel);
    tableDiv.appendChild(container);
}

function renderProjNav() {
    const projUl = document.querySelector(".projects-nav");
  while (projUl.lastChild) {
    projUl.removeChild(projUl.lastChild);
  }

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


