import { Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'messing-around-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('divState', [])]
})
export class AppComponent {

  constructor(private firebaseAuth: AngularFireAuth) {}

  ngOnInit() {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if(user){
        console.log(`You are signed in as ${user.email}`);
      }
      else{
        console.log("You currently are not signed into the application.");
      }
    })
  }
}