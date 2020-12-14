import {Component, OnInit} from '@angular/core';

import {User} from '../../app/models/user';
import {AccountService} from '../services';

@Component({templateUrl: './home.component.html', styleUrls: ['home.component.css']})
export class HomeComponent {
  user: User;
  search: any;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }

}
