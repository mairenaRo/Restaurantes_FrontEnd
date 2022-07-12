import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MapComponent } from './components/map/map.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaquestionsComponent } from './components/faquestions/faquestions.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

// Aquí vamos a importar los componentes para luego, este es el cerebro

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MapComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaquestionsComponent,
    RestaurantsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
