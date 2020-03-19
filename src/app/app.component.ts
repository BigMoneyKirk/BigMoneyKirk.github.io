import { Component } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'messing-around-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ trigger('divState', []) ]
})
export class AppComponent {
}