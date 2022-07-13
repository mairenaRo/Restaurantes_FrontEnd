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
    if (email != '' && password != '' && confPassword != '' && password.length >= 6 && confPassword.length >= 6 && (password === confPassword)) {
      console.log(this.user)
      this.userService.register(email, password)
        .then(res => {
          this.userService.sendVerificationEmail(res?.user);
          //this.userService.sendVerificationEmail(this.userService.getCurrentUser());
          alert('Se te ha enviado al correo, un enlace para verificación, por favor revisa tu buzón.');
          console.log("Se registro: ", res);
          this.router.navigateByUrl('/home');
        }, (error: any)=>{
          alert('Al parecer el correo ya existe. Por favor Intenta con otro o recupera tu contraseña.');
        });
    } else if (password != confPassword) {
      alert('Las contraseñas no coinciden');
      console.log("Las contraseñas no coinciden");
    } else if (email == '' || email == null || password == '' || confPassword == '') {
      alert('No pueden haber espacios vacíos.');
    } else {
      alert('La contraseña debe tener mínimo 6 caracteres por seguridad.');
    }
  }

}
