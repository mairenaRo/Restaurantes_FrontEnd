import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: '',
    confPassword: ''
  }
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }

  register() {
    const { email, password, confPassword } = this.user;
    if (password === confPassword) {
      console.log(this.user)
      this.userService.register(email, password)
        .then(res => {
          console.log("Se registro: ", res);
        })
        this.router.navigateByUrl('/home');
    } else {
      console.log("Las contraseñas no coinciden");
    }
  }

}
