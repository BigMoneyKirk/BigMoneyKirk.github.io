import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-sades-fruit',
  templateUrl: './sades-fruit.component.html',
  styleUrls: ['./sades-fruit.component.scss']
})
export class SadesFruitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  about(){
    return `Linden, NJ -- Healthy Snacks -- Email:sadearielfruitjars@gmail.com -- FB: Sade'Ariel Hill -- IG: ohshe_real`;
  }

}
