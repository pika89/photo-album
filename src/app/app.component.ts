import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: User;

  constructor(private accountService: AccountService) {

  }

  ngOnInit(){
    this.getUser();
  }

  logout() {
    this.accountService.logout();
  }

  getUser(){
    return this.accountService.user.subscribe(x => this.user = x);
  }

}
