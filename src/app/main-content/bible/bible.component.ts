import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { HttpClient } from '@angular/common/http';
import { BibleService } from 'src/app/services/bible.service';

@Component({
  selector: 'messing-around-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  constructor(private http: HttpClient, private bibleService: BibleService) { }

  ngOnInit() {
    this.bibleService.getBibles();
  }

  public pikachu(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  }

}
