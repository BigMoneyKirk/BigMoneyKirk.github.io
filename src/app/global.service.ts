import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router, private http: HttpClient) { }

  public navigate(path: string): void {
    const route = '/' + path;
    this.router.navigate([route]);
  }

  public pikachu(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  }
}
