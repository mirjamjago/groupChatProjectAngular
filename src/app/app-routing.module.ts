import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupChatManagerComponent } from './group-chat-manager/group-chat-manager.component';
import { SetupProfileComponent } from './setup-profile/setup-profile.component';

const routes: Routes = [
  {path: "", component: SetupProfileComponent},
  {path: "group-chat/:userName", component: GroupChatManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
