import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }

  logSesion() {
    const { email, password } = this.user;
    if (email != '' || password != '') {
      this.userService.login(email, password)
        .then(res => {
          if (res?.user?.emailVerified == true) {
            console.log("Se registro: ", res);
            this.router.navigateByUrl('/home');
          } else {
            alert('No has verificado el correo.')
          }
        })
    }
  }

  logWithGoogle() {
    const { email, password } = this.user;
    this.userService.loginWithGoogle(email, password)
      .then(res => {
        console.log("Se registro: ", res);
        this.router.navigateByUrl('/home');
      })
  }

}
