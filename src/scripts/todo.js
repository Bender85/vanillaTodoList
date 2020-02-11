// import getList from "./service";
// import prototype from "./prototype";
// import { autocomplete } from "./autocomplete.js";
const addInput = document.querySelector(".input-doto");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const removeList = document.querySelector(".remove-List");
const listIsEmptyText = document.querySelector(".list-empty");
const suggestions = document.querySelector(".suggestions");

let todos = JSON.parse(localStorage.getItem("todoList")) || [];

let addTodo = e => {
  e.preventDefault();
  const newTitle = addInput.value;
  if (newTitle === "") {
    return;
  }
  todos.push({
    title: newTitle,
    done: false
  });
  saveTodos();
};

let createList = (list = [], listTarget) => {
  // if (list.length) {
  //   listIsEmptyText.classList.add("hidden");
  // }
  listTarget.innerHTML = list
    .map((item, i) => {
      return `<li class="todo-list-item">
    <input type="checkbox" id="todo${i}" data-index="${i}"
           ${item.done ? "checked" : ""} />
    <label for="todo${i}">${item.title}
      <span data-index="${i}">X</span>
    </label>
  </li>`;
    })
    .join("");
};

let toggleDone = e => {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  todos[index].done = !todos[index].done;
  saveTodos();
};

let removeSingle = e => {
  if (!e.target.matches("span")) return;
  const el = e.target;
  const index = el.dataset.index;
  todos.splice(index, 1);
  saveTodos();
  // if (todos.length === 0) {
  //   removeList.classList.add("hidden");
  // }
};

let saveTodos = () => {
  localStorage.setItem("todoList", JSON.stringify(todos));
  createList(todos, todoList);
  showRemoveButton();
  addInput.value = "";
};

let removeData = () => {
  todos = [];
  localStorage.removeItem("todoList");
  createList(todos, todoList);
  removeList.classList.add("hidden");
  listIsEmptyText.classList.remove("hidden");
};

let showRemoveButton = () => {
  // if (todos.length > 1) return;
  // removeList.classList.remove("hidden");
};

todoList.addEventListener("click", toggleDone);
todoList.addEventListener("click", removeSingle);
todoForm.addEventListener("submit", addTodo);
// removeList.addEventListener("click", removeData);

// Init list
createList(todos, todoList);
// prototype(addInput, suggestions, getList());
// autocomplete(addInput, getList());
// export default addTodo;
