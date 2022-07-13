import { RouterModule , Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaquestionsComponent } from './components/faquestions/faquestions.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'AboutUsComponent', component: AboutUsComponent },
  { path: 'ContactUsComponent', component: ContactUsComponent },
  { path: 'FaquestionsComponent', component: FaquestionsComponent },
  { path: 'RestaurantsComponent', component: RestaurantsComponent },
  { path: 'LoginComponent', component: LoginComponent},
  { path: 'RegisterComponent', component: RegisterComponent},
  { path: 'RecoveryComponent', component: RecoveryComponent},
  { path: 'RestaurantDetailComponent', component: RestaurantDetailComponent},



  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
