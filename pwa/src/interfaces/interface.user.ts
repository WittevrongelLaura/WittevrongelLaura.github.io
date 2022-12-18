import Checklist from "./interface.checklist";


export interface User {
    id?: string
    uid: string
    name: string
    role:string
    templates?: Checklist[]
    createdAt?: Date
    updatedAt?: Date
    
}