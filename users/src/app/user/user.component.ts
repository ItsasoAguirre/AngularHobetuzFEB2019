import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarios: Array<User> = [];
  result: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(result => {
      this.result = result;
    });
  }

}
