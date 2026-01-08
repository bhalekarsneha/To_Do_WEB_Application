let taskList = document.getElementById("taskList");

function addTask() {
  let text = taskInput.value;
  let date = dateTimeInput.value;
  let priority = document.getElementById("priority").value;

  if (!text) return alert("Enter a task!");

  let li = document.createElement("li");
  li.dataset.status = "pending";

  li.innerHTML = `
    <div class="task-top">
      <strong>${text}</strong>
      <span class="tag ${priority}">${priority}</span>
    </div>
    <small>${date}</small>
    <div class="actions">
      <button onclick="completeTask(this)">✔</button>
      <button onclick="editTask(this)">✏</button>
      <button onclick="this.parentElement.parentElement.remove()">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  dateTimeInput.value = "";
}

function completeTask(btn) {
  let li = btn.parentElement.parentElement;
  li.classList.toggle("completed");
  li.dataset.status = li.classList.contains("completed") ? "completed" : "pending";
}

function editTask(btn) {
  let task = btn.parentElement.parentElement.querySelector("strong");
  let newText = prompt("Edit task", task.innerText);
  if (newText) task.innerText = newText;
}

function filterTasks(type) {
  document.querySelectorAll("li").forEach(task => {
    if (type === "all") task.style.display = "block";
    else task.style.display = task.dataset.status === type ? "block" : "none";
  });
}
