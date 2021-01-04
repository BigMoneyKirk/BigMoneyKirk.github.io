import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  private user;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log(this.user);
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      // console.log(user);

      // if(!user){
      //   console.log(next.handle(req));

      //   return next.handle(req);
      // }
      const huh = localStorage.getItem("usertoken");

      const modifiedReq = req.clone({params: new HttpParams().set('auth', huh)});
      return next.handle(modifiedReq);
    }))
  }

  constructor(private authService: AuthService) {
    authService.user.pipe(take(1), user => this.user = user);
    this.user = authService.user.value;
    console.log(this.user);
  }

}
