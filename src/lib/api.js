const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export function fetchTodos(type) {
  let url;

  if (type === "completed") {
    url = `${BASE_URL}?completed=true`;
  } else if (type === "not-completed") {
    url = `${BASE_URL}?completed=false`;
  } else if (type === "all") {
    url = BASE_URL;
  }
  return fetch(url).then((res) => res.json());
}
