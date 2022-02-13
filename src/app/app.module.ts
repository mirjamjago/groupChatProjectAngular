import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendChatComponent } from './send-chat/send-chat.component';
import { AllChatComponent } from './all-chat/all-chat.component';
import { ChatComponent } from './chat/chat.component';
import { SetupProfileComponent } from './setup-profile/setup-profile.component';
import { GroupChatManagerComponent } from './group-chat-manager/group-chat-manager.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SendChatComponent,
    AllChatComponent,
    ChatComponent,
    SetupProfileComponent,
    GroupChatManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
