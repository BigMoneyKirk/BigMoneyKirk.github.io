import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, onErrorResumeNext } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

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
    }).pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error occurred!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }

      switch (errorRes.error.error.message){
        case 'EMAIL_EXISTS':
           errorMessage = 'This e-mail address already exists in the database.';
      }

      return throwError(errorMessage);
    })
    );
  }
}
