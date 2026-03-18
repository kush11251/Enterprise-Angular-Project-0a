import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  template: '<button (click)="fetchUsers()">Fetch Users</button>'
})
export class AppComponent {
  constructor(private userService: UserService) { }

  fetchUsers() {
    this.userService.getUsers().subscribe(users => console.log(users));
  }
}