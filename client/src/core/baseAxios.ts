import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class baseAxiosClient {
    private axiosClient:AxiosInstance;

    constructor(basePath:string){
        this.axiosClient = axios.create({
            baseURL: basePath,
            responseType: 'json'
        })
    }

    async get(path:string):Promise<AxiosResponse<any, any>>{
        return this.axiosClient.get(path)
    }
}