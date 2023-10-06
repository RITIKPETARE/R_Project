const addButton = document.getElementById("addButton");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function() {
  const task = todoInput.value;
  if (task.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span><button>Delete</button>`;
    todoList.appendChild(li);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentNode.remove();
  }
});
