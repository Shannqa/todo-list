import { formatDuration } from "date-fns";
import { allTasks, projects, priorities, addTask, checkTasks } from ".";
import editIcon from './edit_icon.svg';
import deleteIcon from './delete_icon.svg';
export { renderTasks, closeModal };


// to do: bug, when you edit a task you succesfully edit the one + create a new empty one at the same time
const elements = [
  { short: "title", full: "Title" },
  { short: "description", full: "Description" },
  { short: "dueDate", full: "Due date" },
  { short: "priority", full: "Priority" },
  { short: "done", full: "Done?" },
  { short: "notes", full: "Notes" },
  { short: "project", full: "Project" },
];

const body = document.querySelector("body");

export default function createDom() {
  createHeader();
  createNav();
  renderProjNav();

  const main = document.createElement("div");
  main.classList.add("main");

  createModal()

  const tableDiv = document.createElement("div");
  tableDiv.classList.add("tableDiv");

  const addTaskBtn = document.createElement("button");
  addTaskBtn.addEventListener("click", () => {showModal("add")});
  // addTaskBtn.addEventListener("click", () => {
  //   const modal = document.querySelector(".modal");
  //   modal.style.display = "flex";
  // });
  addTaskBtn.classList.add("add-button");
  addTaskBtn.textContent = "+";

  main.appendChild(addTaskBtn);
  main.appendChild(tableDiv);
  body.appendChild(main);
  renderTasks("open");
}

function createModal(taskIndex) {
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

  //task's id
  const spanID = document.createElement("span");
  spanID.textContent = taskIndex;
  form.appendChild(spanID);

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
  // submitBtn.addEventListener("click", addTask);
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  modalWindow.appendChild(form);

  body.appendChild(modalWindow);
}

function showModal(id) {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  let submitButtotn = document.querySelector("#submit");
  if (id == "add") {
    //add a new task
    submitButtotn.addEventListener("click", addTask);
  } else {
  //rendering the task that will be edited
    let taskID = id;
    console.log("id: " + taskID);
    let searchedTask = allTasks.find((task) => task._id == taskID);
    console.log(searchedTask);
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
    if (searchedTask.done) {
      done.checked = true;
    };
    notes.value = searchedTask.notes;
  
  
    // now editing the task    
      submitButtotn.addEventListener("click", (event) => {
  
      searchedTask.title = title.value;
      searchedTask.description = description.value;
      searchedTask.dueDate = dueDate.value;
      searchedTask.project = project.value;
      if (done.checked) {
        searchedTask.done = true;
      } else {
        searchedTask.done = false;
      }
      searchedTask.notes = notes.value;
      checkTasks();
      renderTasks("open");
      closeModal();
      event.preventDefault();
      console.log("edited");
    });
  }
  

}



function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "To Do List";
  body.appendChild(header);
}

function renderOpen() {
  renderTasks("open");
}

function renderAll() {
  renderTasks("all");
}

function renderFinished() {
  renderTasks("finished");
}

function createNav() {
  const nav = document.createElement("div");
  const navUl = document.createElement("ul");
  const navOpen = document.createElement("li");
  const navAll = document.createElement("li");
  const navFinished = document.createElement("li");
  const projectsDiv = document.createElement("div");
  const projectsUl = document.createElement("ul");

  nav.classList.add("navigation");
  navOpen.textContent = "Open tasks";
  navOpen.addEventListener("click", renderOpen);
  navAll.textContent = "All tasks";
  navAll.addEventListener("click", renderAll);
  navFinished.textContent = "Finished tasks";
  navFinished.addEventListener("click", renderFinished);

  projectsDiv.textContent = "Projects";
  projectsUl.classList.add("projects-nav");

  nav.appendChild(navUl);
  navUl.appendChild(navOpen);
  navUl.appendChild(navAll);
  navUl.appendChild(navFinished);
  projectsDiv.appendChild(projectsUl);
  nav.appendChild(projectsDiv);

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

  const table = document.createElement("table");
  
  list.forEach((item) => {
    const tr = document.createElement("tr");
    tr.dataset.index = item._id;
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

    const tdTitle = document.createElement("td");
    tdTitle.setAttribute("class", "tasktitle");
    tdTitle.textContent = item.title;
    tr.appendChild(tdTitle);

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

    const tdDelete = document.createElement("td");
    tdDelete.setAttribute("class", "tddelete");
    const imgDelete = new Image();
    imgDelete.src = deleteIcon;
    tdDelete.appendChild(imgDelete);
    tr.appendChild(tdDelete);

    table.appendChild(tr);    
  });
    tableDiv.appendChild(tableLabel);
    tableDiv.appendChild(table);
}

function renderProjNav() {
  const ul = document.querySelector(".projects-nav");
  projects.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}`;
    ul.appendChild(li);
  });
}


