import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError, onErrorResumeNext, Subject } from 'rxjs';
import { AuthResponseData } from '../interfaces/auth-response-data';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private token : string;
  //new User('fj', 'f', 'f', new Date(), 'fd')

  constructor(private router: Router, private http: HttpClient, private _firebaseAuth: AngularFireAuth) { 
    
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
    }).pipe(catchError(this.handleError), tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)));
  }

  public login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://cors-anywhere.herokuapp.com/https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)));
  }

  public getUser(){
    this.user.subscribe(user => {
      return user;
    });
  }

  public getToken(){
    return this.token;
  }

  private handleAuthentication (email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    
      const user = new User(email, userId, token, expirationDate, email);
      this.user.next(user);
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
      }

      return throwError(errorMessage);    
  }
}
