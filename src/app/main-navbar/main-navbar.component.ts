import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  public baseurl: string = '';

  constructor(private router: Router, private global: GlobalService) { }

  ngOnInit() {
  }

  public navigate(path: string): void {
    this.global.navigate(path);
  }

}
