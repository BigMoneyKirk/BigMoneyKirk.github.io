import { Component, OnInit } from '@angular/core';
import { JournalEntry } from 'src/app/models/journalentry';
import * as moment from 'moment';
import { DateFormatterService } from 'src/app/services/date-formatter.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

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

  constructor(private dateFormatter: DateFormatterService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.journal_entries = new Array<JournalEntry>();
    this.journal_entries.push(this.journalEntry1);
    this.journal_entries.push(this.journalEntry2);
    this.ngxSmartModalService.create('myModal', 'content').open();
  }

  public dateformat(date: Date){
    let huh = this.dateFormatter.shortMonthDayYear(date);
    return huh;
  }

  public poem(){
    return `There we were. Just the two of us. Under the stars; talking in the cold. Alone. You and me. Me and you. Together. It felt destined. I thought about you, so I decided to write about you. About the way you make me feel. The thoughts you made me have. The laughs we shared. The good times. You shared with me your secrets, although you call yourself an open book. I like you. You like me. Let's walk together. In D.C. Around the National Mall for a good cause. That's how we met. Not only were we Best Buddies, but best buddies: we just didn't know it yet, in that time. But as time grows on, so will we. Together. I feel it. You feel me. I want you. You want me too. I pray for you, Bell. I pray for you. I think of you, Bell. I think of you. You make my heart sing! Under the stars, just us two. Alone in the cold. The sun has set, but not in our hearts. Our hearts still warm with the memories; just the thoughts we had. Denver Broncos, EMT galore! You have a puppy whom you adore! Poetic genius until I die. Praise the Lord!`;
  }

}
