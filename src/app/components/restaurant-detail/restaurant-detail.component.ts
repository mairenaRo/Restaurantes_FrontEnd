import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  userLogged = this.userService.getCurrentUser();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
