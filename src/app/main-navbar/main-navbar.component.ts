import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit, OnDestroy {

  public baseurl: string = '';
  private userSub: Subscription;
  public isAuthenticated: boolean = false;

  constructor(private router: Router, private global: GlobalService, private authService: AuthService) { }

  ngOnInit() {
    console.log('huh');
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user; //!user ? false : true;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  public navigate(path: string): void {
    this.global.navigate(path);
  }

}
