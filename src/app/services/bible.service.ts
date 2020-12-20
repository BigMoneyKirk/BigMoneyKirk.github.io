import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BibleService implements HttpInterceptor {

  // global variables
  private bibleURL: string = 'https://api.scripture.api.bible';

  constructor(private http : HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${environment.bibleAPIKey}`,
        'api-key': `${environment.bibleAPIKey}`
      }
    });

    return next.handle(request);
  }

  getBibles(){
    this.http.get(`${this.bibleURL}/v1/bibles`).subscribe(data => {console.log(data)});
  }
}
