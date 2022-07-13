import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  logSesion() {
    const { email, password } = this.user;
    this.userService.login(email, password)
      .then(res => {
        console.log("Se registro: ", res);
      })
  }

  logWithGoogle() {
    const { email, password } = this.user;
    this.userService.loginWithGoogle(email, password)
      .then(res => {
        console.log("Se registro: ", res);
      })
  }

}
