import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { GlobalImageService } from '../services/global-image.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavItem } from '../enums/nav-item';
import { firestore } from 'firebase';
import { NavHome } from '../models/navHome';
import { PageIcon } from '../interfaces/page-icon';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent extends PageIcon implements OnInit {

  NavItem = NavItem;
  public list;
  page: string;
  icon: string;
  turnedOn: boolean = true;

  constructor(private global: GlobalService) { 
    super();
  }

  ngOnInit() {
    this.navigationAnimation();
    this.d();

    this.page = 'home';
  }

  private navigationAnimation() {
    this.list = document.querySelectorAll('.list');
    this.list.forEach(outerItem => {
      outerItem.onmouseover = () => {
        this.list.forEach(innerItem => {
          innerItem.className = 'list';
        });
        outerItem.className = 'list active';
      }
    });

    let navigation = document.querySelector('.navigation');
    navigation.addEventListener('mouseover', () => {
      navigation.classList.add('active');
    });
    navigation.addEventListener('mouseout', () => {
      navigation.classList.remove('active');
    });
  }

  d() {
    let something = document.querySelector('.navigation');
    something.appendChild(document.createElement('div')).innerHTML = '<i class="fas fa-home"></i>';

    something.addEventListener("mouseover", () => {
      something.removeChild(something.lastChild);
    })

    something.addEventListener("mouseout", () => {
      something.appendChild(document.createElement('div')).innerHTML = '<i class="fas fa-home"></i>';
    })
  }
}
