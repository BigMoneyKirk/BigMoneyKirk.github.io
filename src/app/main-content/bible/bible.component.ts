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
  public selectedBook: BibleBook;

  public chapters;
  public selectedChapter;

  public verses;
  public selectedVerse;

  public selection;

  constructor(private http: HttpClient, private bibleService: BibleService) { }

  ngOnInit() {
    this.bibleService.getBibleBooks().subscribe(books => this.bibleBooks = books.data)
  }

  chapterChange(){
    this.bibleService.getBookChapters(this.selectedBook).subscribe(chapters => this.chapters = chapters.data);
  }

  getChapter(){
    this.bibleService.getChapter(this.selectedChapter).subscribe(text => this.selection = text.data.content)
  }

  // verseChange(){
  //   this.bibleService.getVerses(this.selectedBook, this.selectedChapter).subscribe(verses => {this.verses = verses.data;
  //     console.log(this.verses)}
  //     );
  // }
}
