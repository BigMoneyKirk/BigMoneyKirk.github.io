import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'messing-around-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // console.log(this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu').subscribe());
  }

  public pikachu(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  }

}
