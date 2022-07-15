import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  user = {
    email: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    const {email} = this.user;
    this.userService.sendRecoveryLink(email);
    Notiflix.Notify.success("Se te ha enviado el enlace al correo, por favor revisa tu buzón principal y no deseado.");
    this.router.navigateByUrl('/home');
  }
}
