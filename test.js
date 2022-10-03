function TodoList() {
  // useState의 첫 번째 리턴값
  let todos = [1, 2, 3, 4, 5];
  console.log("TodoList");
  // useState의 두 번째 리턴값 setFn
  function setTodos(todos) {
    return (todos = todos.map((item) => item + 1));
  }
  todos = List(todos, setTodos);

  return todos;
}

function List(todos, setTodos) {
  console.log("List");
  return Todo(todos, setTodos);
}

function Todo(todos, setTodos) {
  console.log("Todo");
  return setTodos(todos);
}

console.log(TodoList());

// TodoList > List > Todo
