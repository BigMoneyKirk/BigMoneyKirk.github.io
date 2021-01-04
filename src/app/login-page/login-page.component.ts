import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData } from '../interfaces/auth-response-data'
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AlertModalComponent } from '../modals/alert-modal.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AuthService]
})
export class LoginPageComponent implements OnInit {

  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

  public isLoginMode: boolean = true;
  public isLoading: boolean = false;
  public error: string = null;
  public user: Observable<firebase.User>;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private _firebaseAuth: AngularFireAuth, private componentFactoryResolver: ComponentFactoryResolver) {
    this.user = _firebaseAuth.authState;
  }

  ngOnInit() {
  }

  public onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    }
    else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(data => {
      this.isLoading = false;

      // pass a success token to the localStorage
      localStorage.setItem("successfulLogin", "true");
      localStorage.setItem("userIDtoken", data.localId);
      localStorage.setItem("usertoken", data.idToken);

      // function to get all of that user's information; let's start with just their name. Welcome [insert user name here]

      this.router.navigate(['/home']);
    },
      errorMessage => {
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );
    form.reset();
  }

  public signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((result) => {
      this.router.navigate(['home']);
      window.location.reload();
    });
  }

  public onHandleError() {
    this.error = null;
  }

  /* -------------------- PRIVATE METHODS -------------------- */

  private showErrorAlert(message: string) {
    const alertCompFactory = this.componentFactoryResolver.resolveComponentFactory(AlertModalComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCompFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
}
