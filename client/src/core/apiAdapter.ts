import { baseAxiosClient } from "./baseAxios";

export class ApiAdapter extends baseAxiosClient{
    constructor(){
        const basePath = process.env.VUE_APP_API_ENDOPOINT + process.env.VUE_APP_ENVIRONMENT
        console.log(process.env.VUE_APP_API_ENDOPOINT)
        super(basePath);
    }
}