import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { GlobalImageService } from '../services/global-image.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  public list;

  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.list = document.querySelectorAll('.list');
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].onmouseover = () => {
        let j = 0;
        while (j < this.list.length) {
          this.list[j++].className = 'list';
        }
        this.list[i].className = 'list active';
      }
    }

    let navigation = document.querySelector('.navigation');
    navigation.addEventListener('mouseover', () => {
      navigation.classList.add('active');
    });
    navigation.addEventListener('mouseout', () => {
      navigation.classList.remove('active');
    });
  }

  public navigate(path: string): void {
    this.global.navigate(path);
  }
}
