import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'messing-around-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.slideCategoryDiv();
  }

  private slideCategoryDiv() {
    $('.fas').click(function () {
      $('.categories-container').toggleClass('categories-container-slide', true);
    });
  }
}
