import { User } from "./user.model";

export class Chat {
    id?: string;
    message?: string;
    sender?: User;
    roomId?: number;
    date?: string;

    constructor(message?: string, sender?: User, roomId?: number, date?: string, id?: string){
        this.id = id;
        this.message = message;
        this.sender = sender;
        this.roomId = roomId;
        this.date = date;
    }



}
