document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const input = document.querySelector("#new-task-description")
    const task = input.value 

    buildToDo(task)

    form.reset()

  })
});

function buildToDo(task) {
  const taskList = document.querySelector("#tasks")

  const li = document.createElement("li")
  li.textContent = task
  taskList.appendChild(li)
}