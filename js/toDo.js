let toDos = [];

const toDoInput = document.getElementById("inputQuest");
const toDoList = document.querySelector(".toDoList");

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function addTodo(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const li = document.createElement("li");
  li.id = Date.now().toString();
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  toDoInput.value = "";

  const toDoObj = {
    id: parseInt(li.id),
    text: newTodo,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => {
      const event = new Event("keydown");
      event.key = "Enter";
      toDoInput.value = toDo.text;
      addTodo(event);
    });
  }
}

toDoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo(event);
  }
});

loadToDos();
