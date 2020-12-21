import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { HttpClient } from '@angular/common/http';
import { BibleService } from 'src/app/services/bible.service';
import { BibleBook } from 'src/app/models/bibleBook';

@Component({
  selector: 'messing-around-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  public bibleBooks: Array<BibleBook>;

  constructor(private http: HttpClient, private bibleService: BibleService) { }

  ngOnInit() {
    this.bibleService.getBibleBooks().subscribe(books => {
      // this.bibleBooks = books.data;
      console.log("books", books.data);
      // console.log("this.bibleBooks", this.bibleBooks);
    })
  }
}
