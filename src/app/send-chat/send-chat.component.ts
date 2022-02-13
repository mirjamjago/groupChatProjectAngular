import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Chat } from '../models/chat.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-send-chat',
  templateUrl: './send-chat.component.html',
  styleUrls: ['./send-chat.component.css']
})
export class SendChatComponent implements OnInit {
  @Input() activeUser: User = new User();
  @Input() roomId: number = 0;
  @Output() triggerSendChat: EventEmitter<Chat> = new EventEmitter<Chat>();
chat: Chat = new Chat();
  constructor() { }

  ngOnInit(): void {
  }

  sendChat(){
    this.chat.date = new Date().toISOString();
    this.chat.sender = this.activeUser;
    this.chat.roomId = this.roomId;

    this.triggerSendChat.emit(this.chat)
    this.chat = new Chat();
    console.log(this.chat)
  }
}
