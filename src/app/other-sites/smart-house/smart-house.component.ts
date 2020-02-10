import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-smart-house',
  templateUrl: './smart-house.component.html',
  styleUrls: ['./smart-house.component.scss']
})
export class SmartHouseComponent implements OnInit {

  public smart_house_logo: string = 'https://fontmeme.com/permalink/200210/71a39b2a1b0ae65fefdf6ba31527ef32.png';

  constructor() { }

  ngOnInit() {
  }

}
