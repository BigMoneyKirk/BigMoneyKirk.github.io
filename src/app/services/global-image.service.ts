import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalImageService {

  public logoUrl = 'assets/images/KELogo_Resize.png';
  public king = 'assets/images/KingKirk.png';
  public shanghaiUrl = "assets/images/ShanghaiWorldFinanncialCenter.jpg";

  constructor() { }
}
