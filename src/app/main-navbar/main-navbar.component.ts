import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { GlobalImageService } from '../services/global-image.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit, OnDestroy {

  public baseurl: string = '';
  private userSub: Subscription;
  public isAuthenticated: boolean = false;
  public kingImg = this.gloabalImage.king;
  public logoHomeButton = this.gloabalImage.logoHomeButton;

  constructor(private router: Router, private global: GlobalService, private authService: AuthService, private gloabalImage: GlobalImageService) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  public authorized() : boolean{
    return localStorage.getItem("successfulLogin") == "true" ? true : false;
  }

  public logoNavigation(){
    if(this.authorized()){
      this.navigate('/home');
    }
    else{
      this.navigate('/login');
    }
  }

  public logout() {
    localStorage.setItem("successfulLogin", "false");
    this.global.navigate('/login');
  }

  public navigate(path: string): void {
    this.global.navigate(path);
  }
}
