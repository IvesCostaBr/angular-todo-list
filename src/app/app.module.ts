import { UserService } from './services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/views/footer/footer.component';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    UserComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ LoginService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
