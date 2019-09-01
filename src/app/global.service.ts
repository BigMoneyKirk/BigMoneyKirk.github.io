import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router) { }

  public navigate(path: string): void {
    const route = '/' + path;
    console.log(route);
    this.router.navigate([route]);
  }
}
