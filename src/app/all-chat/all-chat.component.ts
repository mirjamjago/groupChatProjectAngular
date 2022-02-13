import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../models/chat.model';

@Component({
  selector: 'app-all-chat',
  templateUrl: './all-chat.component.html',
  styleUrls: ['./all-chat.component.css']
})
export class AllChatComponent implements OnInit {
@Input() chats: Array<Chat> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
