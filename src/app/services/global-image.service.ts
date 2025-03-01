import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalImageService {

  public akeem = "assets/images/about/akeem.jpg";
  public coronaGIF = "assets/images/blog/tissue_paper_on_the_low.gif";
  public logoUrl = 'assets/images/logos/KEU_Logo_FullColor_Copy.png';
  public logoWhite = 'assets/images/logos/KE_Logo_OneColor.png';
  // public logoUrl = 'assets/images/logos/KELogo_Resize.png';
  public logoHomeButton = 'assets/images/logos/KEU_Logo_FullColor_Secondary.png';
  public kaka = 'assets/images/bunnie-beaute/kaka.jpg';
  public kengelle = 'assets/images/about/kengelle_science.jpg';
  public king = 'assets/images/about/og.jpg';
  public moneySmiley = 'assets/images/kirkland-loan/money-smiley.gif';
  public screvenPlaza = 'assets/images/screven-forward/screven-co-plaza.PNG'
  public shanghaiUrl = "assets/images/backgrounds/ShanghaiWorldFinanncialCenter.jpg";
  public shanice = "assets/images/about/shanice.jpg";
  public thinkGrowRich = "assets/images/about/think_and_grow_rich.jpg";

  constructor() { }
}
