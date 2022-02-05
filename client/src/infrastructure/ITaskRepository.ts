import {task} from "@/models/task/type";
export interface ITaskRepository {
    getTaskList(): Promise<task[]>;
}