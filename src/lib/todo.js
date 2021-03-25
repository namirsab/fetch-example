export function createTodoComponent(todo) {
  // Create all the elements that conform the todo
  const todoParent = createTodoParent(todo);
  const todoTitle = createTodoTitle(todo);
  const todoButton = createTodoButton(todo);

  // Put them together
  todoParent.append(todoTitle);
  todoParent.append(todoButton);

  return todoParent;
}

function createTodoParent(todo) {
  const todoParent = document.createElement("section");
  todoParent.classList.add("todo");
  if (todo.completed) {
    todoParent.classList.add("todo--completed");
  }

  return todoParent;
}

function createTodoTitle(todo) {
  const todoTitle = document.createElement("h3");
  todoTitle.classList.add("todo__title");
  todoTitle.textContent = todo.title;

  return todoTitle;
}

function createTodoButton(todo) {
  const todoButton = document.createElement("button");
  todoButton.classList.add("todo__button");

  if (todo.completed) {
    todoButton.textContent = "Undo";
  } else {
    todoButton.textContent = "Complete";
  }

  return todoButton;
}
