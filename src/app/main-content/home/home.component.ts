import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import $ from 'jquery';
import { GlobalImageService } from 'src/app/services/global-image.service';
import { AuthService } from 'src/app/services/auth.service';
import { exhaustMap, take } from 'rxjs/operators';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('divState', [
      state('void', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-1000px)' }),
        group([
          animate('4s', keyframes([
            style({
              transform: 'translateX(-1000px)',
              opacity: 0.2,
              offset: 0
            }),
            style({
              transform: 'translateX(-500px)',
              opacity: 0.5,
              offset: 0.5
            }),
            style({
              transform: 'translateX(-200px)',
              opacity: 1,
              offset: 0.8,
            }),
            style({
              transform: 'translateX(0)',
              offset: 1
            })
          ]))
        ])
      ])])]
})

export class HomeComponent implements OnInit {

  // --------------- Global Variables ------------------

  public state = 'normal';
  public king = this.globalImage.king;
  public logoUrl = this.globalImage.logoUrl;
  public welcomeLogoUrl = "https://fontmeme.com/permalink/191007/2ac185608541058593593bb536036fe6.png";
  public welcomeLogo2Url = "https://fontmeme.com/permalink/191015/8df3be736d6f57ed67102608a9251e75.png";

  // ------------------- Constructor ----------------------

  constructor(private globalImage: GlobalImageService, private authService: AuthService, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.thankyouAnimation();
    let userID = localStorage.getItem('userIDtoken')
    let huh = this.firebaseService.getUser(userID);
    console.log(huh);
  }

  // ------------------- Scripture -------------------

  public luke4_18() {
    return `Luke 4:18-19 The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free, to proclaim the year of the Lord's favor.`;
  }

  public _1peter4_8_10() {
    return `1 Peter 4:8-10 (ESV) Above all, keep loving one another earnestly, since love covers a multitude of sins. Show hospitality to one another without grumbling. As each has received a gift, use it to serve one another, as good stewards of God's varied grace:`;
  }

  // ------------------ Animation ---------------------

  public thankyouAnimation() {
    const thankYouElement = document.querySelector('#thank-you');
    this.animateCSS('#thank-you', 'zoomInDown', () => {
      thankYouElement.classList.add('animated', 'delay-3s', 'zoomOutDown');
      $(thankYouElement).delay(4000).hide(0);
    });

    const gladElement = document.querySelector('#glad');
    $(gladElement).hide(0);
    $(gladElement).delay(6000).show(0);
    this.animateCSS('#glad', 'zoomInDown', () => {
      gladElement.classList.add('animated', 'delay-3s', 'zoomOutDown');
      $(gladElement).delay(4000).hide(0);
    });
  }

  public animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }
}