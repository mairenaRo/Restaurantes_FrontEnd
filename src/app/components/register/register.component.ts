import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user)
    const {email, password} = this.user;
    this.userService.register(email, password)
    .then(res => {
      console.log("Se registro: ",res);
    })
  }

}
