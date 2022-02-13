import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  apiUrl: string = "https://crudcrud.com/api/92848d68971640b59f8ab1d4360adf97";
  sendChatEndpoint: string = "/chats";
  getChatEndPoint: string = "/chats";
  allHeaders= {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  constructor() { }

sendChatToAPI(chat: Chat): Promise<Response>{
  return fetch(this.apiUrl + this.sendChatEndpoint,{
    method: 'POST',
    headers: this.allHeaders,
    body: JSON.stringify(chat)
  }
    )
}

getChatFromAPI(): Promise<Response>{
return fetch(this.apiUrl + this.getChatEndPoint,
  {method: 'GET',
headers: this.allHeaders})
}

}
