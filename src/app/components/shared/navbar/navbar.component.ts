import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged = this.userService.getCurrentUser();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logOutUser(){
    this.userService.logOut();
  }

}
