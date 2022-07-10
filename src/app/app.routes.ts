import { RouterModule , Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaquestionsComponent } from './components/faquestions/faquestions.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'AboutUsComponent', component: AboutUsComponent },
  { path: 'ContactUsComponent', component: ContactUsComponent },
  { path: 'FaquestionsComponent', component: FaquestionsComponent },
  { path: 'RestaurantsComponent', component: RestaurantsComponent },




  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
