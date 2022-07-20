//Imports de angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';"@angular/forms";

// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MapComponent } from './components/map/map.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaquestionsComponent } from './components/faquestions/faquestions.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { RestaurantesService } from './services/restaurantes.service';
import { CommentsService } from './services/comments.service';
import { FquestionsService } from './services/fquestions.service';


// Aquí vamos a importar los componentes para luego, este es el cerebro

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    FooterComponent,
    BodyComponent,
    MapComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaquestionsComponent,
    RestaurantsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RestaurantesService, CommentsService, FquestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
