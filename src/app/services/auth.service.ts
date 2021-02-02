import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError, onErrorResumeNext, Subject } from 'rxjs';
import { AuthResponseData } from '../interfaces/auth-response-data';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user;
  private token : string;

  constructor(private http: HttpClient, private _firebaseAuth: AngularFireAuth, private router: Router) {

  }

  public signInWithTwitter(){
    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  public signup(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn, password)));
  }

  public login(email: string, password: string) {
    // https://cors-anywhere.herokuapp.com/
    return this.http.post<AuthResponseData>('https://cors-anywhere.herokuapp.com/https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn, password)));
  }

  private handleAuthentication (email: string, userId: string, token: string, expiresIn: number, password?: string) {
    this._firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(data => this.user = data.user);

    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

      const user = new User(email, userId, token, expirationDate, email);
      this.token = user.token;
  }

  private handleError (errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }

      switch (errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = 'This e-mail address already exists in the database.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This e-mail address is currently not in the system.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'You have entered an incorrect password.';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
          errorMessage = 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
          break;
      }

      return throwError(errorMessage);
  }
}
