import type {TaskStatus, TaskName, TaskId, Task, TaskList} from "./types"

const addTaskButton = document.getElementById("addTaskButton")
const taskName = document.getElementById("taskName") as HTMLInputElement
const taskListElement = document.getElementById("todoList")

for (const task of JSON.parse(localStorage.getItem("tasks") || "[]")){
    createTaskElement(task)
}



function createTaskElement(task: Task): void{
    const todoItem = document.createElement("li")
    todoItem.className = "todoItem"
    todoItem.id = String(task.Id)
    
    const todoTextZone = document.createElement("div")
    todoTextZone.className = "todoTextZone"

    const todoCheckBox = document.createElement("input")
    todoCheckBox.type = "checkbox"
    todoCheckBox.className = "todoCheckBox"

    const todoText = document.createElement("p")
    todoText.className = "todoText"
    todoText.append(task.Task)

    todoTextZone.appendChild(todoCheckBox)
    todoTextZone.appendChild(todoText)

    const todoDeleteButton = document.createElement("todoDeleteButton")
    todoDeleteButton.className = "todoDeleteButton"
    todoDeleteButton.append("Delete")

    todoItem.appendChild(todoTextZone)
    todoItem.appendChild(todoDeleteButton)

    taskListElement?.appendChild(todoItem)
    
    todoCheckBox.addEventListener("change", (e) => {
        if (e.currentTarget?.checked){
            todoText.classList.add("todoComplete")
        }
        else{
            todoText.classList.remove("todoComplete")
        }
    })

    todoDeleteButton.addEventListener("click", (e) => {
        todoItem.remove()
        const tasks: TaskList = JSON.parse(localStorage.getItem("tasks") || "[]")
        localStorage.setItem("tasks",JSON.stringify(tasks.filter((item) => item.Id == task.Id)))
    })
    console.log("im also ran")
}



function addTask(task: Task): void{
    if (localStorage.getItem("tasks") === null)
    {
        localStorage.setItem("tasks", JSON.stringify([]))
    }

    let tasksList: TaskList = JSON.parse(localStorage.getItem("tasks") || "[]")
    tasksList.push(task)
    console.log("im ran")
    localStorage.setItem("tasks", JSON.stringify(tasksList))
    createTaskElement(task)

}

addTaskButton?.addEventListener("click", function(e){
    const task: TaskName = taskName?.value
    const newTask: Task = {
        Id: Date.now(),
        Task: task,
        Status: "unfinished"
    }
    addTask(newTask)
})

