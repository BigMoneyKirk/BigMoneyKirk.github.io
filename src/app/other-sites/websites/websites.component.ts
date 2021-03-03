import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'messing-around-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent implements OnInit {

  public categoryModel: string = "";

  constructor() { }

  ngOnInit() {
    this.slideCategoryDiv();
  }

  public setCategory(category){
    this.categoryModel = category;
  }

  private slideCategoryDiv() {
    $('.fas').click(function () {
      $('.categories-container').toggleClass('categories-container-slide', true);
    });
  }
}
