import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  userLogged = this.userService.getCurrentUser();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
