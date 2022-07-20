import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';

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
    Notiflix.Notify.success('Se cerró la sesión con éxito.');
    this.userService.logOut();
  }

}
