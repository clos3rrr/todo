import { TaskPriority } from "./enums"


export class Task {
  static _id: number = 0
  readonly id : number
  name: string
  priority: TaskPriority = TaskPriority.Fourth
  status: boolean = false

  constructor(taskName: string) {
    this.id = Task._id++
    this.name = taskName
    this.changeStatus = this.changeStatus.bind(this);
    this.changePriority = this.changePriority.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  public changeStatus(): void {
    this.status = !this.status
  }

  public changePriority(newPriority: TaskPriority): void {
    this.priority = newPriority
  }

  public changeName(newName: string): void {
    this.name = newName
  }
}