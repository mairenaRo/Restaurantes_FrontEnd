import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';

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
    if (email != '' && password != '' && password.length >= 6) {
      this.userService.login(email, password)
        .then(res => {
          if (res?.user?.emailVerified == true) {
            console.log("Se registro: ", res);
            Notiflix.Notify.success('Inicio de sesion con éxito.');
            this.router.navigateByUrl('/home');
          } else {
            this.userService.sendVerificationEmail(res?.user);
            alert('No has verificado el correo.Por favor hazlo.')
          }
        });
        if (this.userService.emailVerifiedCheck(this.userService.getCurrentUser())==false){
          this.userService.sendVerificationEmail(this.userService.getCurrentUser());
          alert('No has verificado el correo.Por favor hazlo.');
        }
    } else if (email != '' && password != ''){
      Notiflix.Notify.failure('Error, no puedes dejar campos en blanco.');
    } else {
      Notiflix.Notify.failure('No se pudo iniciar sesión, datos erróneos.');
    }
  }

  logWithGoogle() {
    const { email, password } = this.user;
    this.userService.loginWithGoogle(email, password)
      .then(res => {
        Notiflix.Notify.success('Inicio de sesión correcto.')
        console.log("Se registro: ", res);
        this.router.navigateByUrl('/home');
      })
  }

  registerPage(){
    this.router.navigateByUrl('/RegisterComponent');
  }

  forgotPassword(){
    this.router.navigateByUrl('/RecoveryComponent');
  }
}
