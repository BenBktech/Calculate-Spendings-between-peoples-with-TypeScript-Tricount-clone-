import { User } from "../classes/user"

export interface isTransaction {
    getLabel():string
    getAmount():number
    getSpender():User
    getReceiver():User
}