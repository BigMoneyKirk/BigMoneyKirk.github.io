import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { HomeComponent } from './main-content/home/home.component';
import { AboutComponent } from './main-content/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NavbarModule, WavesModule, MDBBootstrapModule  } from 'angular-bootstrap-md';
import { BibleComponent } from './main-content/bible/bible.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LoginPageComponent,
    MainNavbarComponent,
    HomeComponent,
    AboutComponent,
    LoadingSpinnerComponent,
    BibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
