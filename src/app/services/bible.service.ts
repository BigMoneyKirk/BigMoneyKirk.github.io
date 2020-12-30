import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BibleBook } from '../models/bibleBook';

@Injectable({
  providedIn: 'root'
})
export class BibleService implements HttpInterceptor {

  // global variables
  private bibleURL: string = 'https://api.scripture.api.bible';
  private asvBible: string = '06125adad2d5898a-01';
  public bibleBooks: Array<any>;

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

  getASVBible(){
    return this.http.get(`${this.bibleURL}/v1/bibles/${this.asvBible}`);
  }

  getBibleBooks(){
    return this.http.get(`${this.bibleURL}/v1/bibles/${this.asvBible}/books`);
  }

  getBookChapters(bookID){
    return this.http.get(`${this.bibleURL}/v1/bibles/${this.asvBible}/books/${bookID}/chapters`)
  }
}
