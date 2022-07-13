import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged = this.userService.getCurrentUser();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logOutUser(){
    this.userService.logOut();
    window.location.reload();
  }
}
