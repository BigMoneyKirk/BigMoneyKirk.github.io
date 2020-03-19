import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalImageService {

  public logoUrl = 'assets/images/logos/KELogo_Resize.png';
  public kaka = 'assets/images/bunnie-beaute/kaka.jpg';
  public king = 'assets/images/people/KingKirk.png';
  public moneySmiley = 'assets/images/kirkland-loan/money-smiley.gif';
  public shanghaiUrl = "assets/images/backgrounds/ShanghaiWorldFinanncialCenter.jpg";

  constructor() { }
}
