import { task } from "./type";
import {ITaskRepository} from "@/infrastructure/ITaskRepository";
import {ApiAdapter} from "@/core/apiAdapter";
export class TaskRepository implements ITaskRepository  {
    private adapter;
    constructor(){
        this.adapter = new ApiAdapter();
    }
    
    async getTaskList(): Promise<task[]> {
        const res = await this.adapter.get('/hello')
        console.log(res)
        const task:task[]=res.data
        return task;
    }
}