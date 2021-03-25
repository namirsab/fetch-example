import { createTodoComponent } from "./lib/todo.js";
import { fetchTodos } from "./lib/api.js";

const searchButton = document.querySelector(".header__search-button");
const filterDropdown = document.querySelector(".header__filter");
const content = document.querySelector(".content");

searchButton.addEventListener("click", () => {
  const type = filterDropdown.value;
  clearTodos();
  fetchTodos(type).then((todos) => {
    todos.forEach((todo) => {
      const todoComponent = createTodoComponent(todo);
      content.append(todoComponent);
    });
  });
});

function clearTodos() {
  const todoElements = document.querySelectorAll(".todo");
  todoElements.forEach((todoElement) => todoElement.remove());
}
