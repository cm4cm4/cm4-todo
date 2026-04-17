export type TaskStatus = "unfinished" | "finished"
export type TaskName = string
export type TaskId = number

export type Task = {
    Task: TaskName,
    Status: TaskStatus,
    readonly Id: TaskId
}

export type TaskList = Array<Task>