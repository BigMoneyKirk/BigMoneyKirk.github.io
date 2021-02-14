import { Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { GlobalService } from './global.service';

@Component({
  selector: 'messing-around-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('divState', [])]
})
export class AppComponent {

  constructor(private firebaseAuth: AngularFireAuth, private globalService: GlobalService) {}

  ngOnInit() {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if(user){
        this.globalService.isLoggedIn = true;
        console.log(`You are signed in as ${user.email}`);
      }
      else{
        this.globalService.isLoggedIn = false;
        console.log("You currently are not signed into the application.");
      }
    });
    this.scrollAnimation();
  }

  private scrollAnimation(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
      var scrollPercent = (scroll / (dh-wh) * 100);
      $('#progressbar').css('height', scrollPercent + "%");
    });
  }
}