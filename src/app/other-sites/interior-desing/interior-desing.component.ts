import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-interior-desing',
  templateUrl: './interior-desing.component.html',
  styleUrls: ['./interior-desing.component.scss']
})
export class InteriorDesingComponent implements OnInit {

  public certified_img = "assets/images/interior-design/ejs-stuff/certified-architect.JPG";
  public chair_design = "assets/images/interior-design/ejs-stuff/chair_design.jpg";
  public city_corener_sketch_img = "assets/images/interior-design/ejs-stuff/city-corner-sketch.JPG";
  public contrasts_img = "assets/images/interior-design/ejs-stuff/contrasts.jpg";
  public ejs_logo = "https://fontmeme.com/permalink/191013/d1ef77ff2ea001812916feee00c10718.png";

  constructor() { }

  ngOnInit() {
  }

  aboutEJ(){
    return `EJ, you need to message me what type of bio you would like to put here...`;
  }

  andHere(){
    return `And here!!`;
  }

}
