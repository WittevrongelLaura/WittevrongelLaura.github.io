import { User } from "./interface.user"

export interface Transport {
    id?: string
    checklistId: string
    driver: string
    amountOfSeats: number
    people: User[]
    
}