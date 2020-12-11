import { Component } from '@angular/core';

import { User } from '../../app/models/user';
import { AccountService } from '../services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
