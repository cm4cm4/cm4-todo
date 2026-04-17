import type {TaskStatus, TaskName, TaskId, Task, TaskList} from "./types"

const addTaskButton = document.getElementById("addTaskButton")
const taskName = document.getElementById("taskName") as HTMLInputElement
const taskListElement = document.getElementById("todoList")

function createTaskElement(task: Task): void{
    const listElement = document.createElement("li")
    listElement.classList.add("todoItem", task.Task)
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