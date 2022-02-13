import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../models/chat.model';
import { User } from '../models/user.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-group-chat-manager',
  templateUrl: './group-chat-manager.component.html',
  styleUrls: ['./group-chat-manager.component.css']
})
export class GroupChatManagerComponent implements OnInit {
  user: User = new User();
  chats: Array<Chat> = [];
  constructor(private router: Router, public chatService: ChatService) { }


  ngOnInit(): void {
    try{
      //@ts-ignore
      this.user = JSON.parse(localStorage.getItem("user"));
      if(!this.user.userName) throw new Error("User undefined")
      this.setupLoadChatInterval();
    }catch(ex){
      alert("You must be logged in to access this page!")
      this.router.navigate(['/'])

    }
  }

  setupLoadChatInterval(){
    this.loadChats();
setInterval(() => {
  this.loadChats()
}, 180000)
}
  onLogout(){
    localStorage.removeItem("user");
    this.router.navigate(['/'])

  }

  onSendChat(chat: Chat){
    //use chat service to send chat to api
    // relode chat messages from api
    this.chatService.sendChatToAPI(chat)
    .then(async (response) => {
      if(response.status === 201){
        this.loadChats();
      }else{
        throw new Error(await response.json())
      }
    }).catch(ex => {
      console.log(ex);
      alert(ex.messages)
    })
    this.loadChats();
  }


  loadChats(){
    this.chatService.getChatFromAPI()
    .then(async (response: Response) => {
      if(response.status === 200){
        this.chats = await response.json();
      }else {
        throw new Error(await response.text())
      }
    }).catch(ex =>{
      console.log(ex)
      alert("Unable to load messages")
    })
  }

}
