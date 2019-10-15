import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalImageService {

  public logoUrl = 'assets/images/logos/KELogo_Resize.png';
  public king = 'assets/images/people/KingKirk.png';
  public shanghaiUrl = "assets/images/backgrounds/ShanghaiWorldFinanncialCenter.jpg";

  constructor() { }
}
