import { Component, OnInit } from '@angular/core';
import { JournalEntry } from 'src/app/models/journalentry';

@Component({
  selector: 'messing-around-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  public journal_entries: Array<JournalEntry>;

  public journalUrl = "https://fontmeme.com/permalink/191015/6ed769f9c99ef18d831273a181e61f9f.png";
  public scrollBannerUrl = "assets/images/journal/scroll-banner.png";
  public journalEntry1: JournalEntry = new JournalEntry(1, 'Journal Entry 1', true, new Date());
  public journalEntry2: JournalEntry = new JournalEntry(2, 'Journal Entry 2', true, new Date());

  constructor() { }

  ngOnInit() {
    this.journal_entries = new Array<JournalEntry>();
    this.journal_entries.push(this.journalEntry1);
    this.journal_entries.push(this.journalEntry2);
  }

  public dateformat(date: Date){
    // var moment = require('moment');
    // return moment(date).format();
    return date;
  }

}
