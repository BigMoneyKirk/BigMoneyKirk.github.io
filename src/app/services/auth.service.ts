import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, onErrorResumeNext } from 'rxjs';
import { AuthResponseData } from '../interfaces/auth-response-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public signup(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVw659-42k5Fp_0J6_7b7x_WAy3tW4JkQ',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError)
    );
  }

  public login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVw659-42k5Fp_0J6_7b7x_WAy3tW4JkQ',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError))
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
