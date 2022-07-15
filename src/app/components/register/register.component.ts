import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';

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
    if (email != '' && password != '' && confPassword != '' && password.length >= 6 && confPassword.length >= 6 && (password === confPassword)) {
      console.log(this.user)
      this.userService.register(email, password)
        .then(res => {
          this.userService.sendVerificationEmail(res?.user);
          Notiflix.Notify.success('Registro con éxito.');
          console.log("Se registro: ", res);
          this.router.navigateByUrl('/home');
        }, (error: any)=>{
          Notiflix.Notify.failure('Al parecer el correo ya existe. Por favor Intenta con otro o recupera tu contraseña.');
        });
    } else if (password != confPassword) {
      Notiflix.Notify.failure('Las contraseñas no coinciden');
      console.log("Las contraseñas no coinciden");
    } else if (email == '' || email == null || password == '' || confPassword == '') {
      Notiflix.Notify.failure('No pueden haber espacios vacíos.');
    } else {
      Notiflix.Notify.failure('La contraseña debe tener mínimo 6 caracteres por seguridad.');
    }
  }

}
