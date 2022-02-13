export class User {
    userName?: string;
    chatColor?: string;
    location?: string;

    constructor( userName?: string, chatColor?: string, location?: string){
        this.userName = userName;
        this.chatColor = chatColor;
        this.location = location;
    }
}
