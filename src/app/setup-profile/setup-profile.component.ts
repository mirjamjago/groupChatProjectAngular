import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asapScheduler } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-setup-profile',
  templateUrl: './setup-profile.component.html',
  styleUrls: ['./setup-profile.component.css']
})
export class SetupProfileComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router) { }

  ngOnInit(): void {
    try{
      //@ts-ignore
      let user= JSON.parse(localStorage.getItem("user"));
      if(user || user?.userName !== null){
        //@ts-ignore
        this.router.navigate(['group-chat', user?.userName])
      }
    }catch(ex){

    }

  }

  private validateUser(): boolean{
    if(this.user.chatColor === null || 
      this.user.location == null || 
      this.user.userName == null){
        return false;
      }
    return true;
  }
    processUserInfo(): void {
    if(!this.validateUser()) {
      alert("Please provide all info!")
      return;
    }
    localStorage.setItem("user", JSON.stringify(this.user))
    this.router.navigate(['group-chat', this.user.userName])
  }

}
