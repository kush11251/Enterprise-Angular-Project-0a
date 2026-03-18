import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  template: '<ul><li *ngFor="let user of users">{{ user.name }}</li></ul>'
})
export class UsersComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}