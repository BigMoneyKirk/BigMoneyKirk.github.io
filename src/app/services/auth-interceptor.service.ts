// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpParams
// } from '@angular/common/http';
// import { take, exhaustMap } from 'rxjs/operators';

// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthInterceptorService implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   private token : string = localStorage.getItem("userIDtoken")

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//         const modifiedReq = req.clone({
//           setHeaders: {
//             Authorization: `${this.token}`
//           }
//         });
//         console.log("modifiedReq", modifiedReq);
//         return next.handle(modifiedReq);
//   }
// }