import { ITaskRepository } from "@/infrastructure/ITaskRepository";
import { task } from "./type";

export class TaskService {
    private taskRepository: ITaskRepository;

    constructor(repo : ITaskRepository){
        this.taskRepository = repo;
    }

    async getTaskList():Promise<task[]>{
        return await this.taskRepository.getTaskList();
    }
}