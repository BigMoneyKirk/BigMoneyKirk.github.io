import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  public journalUrl = "https://fontmeme.com/permalink/191015/6ed769f9c99ef18d831273a181e61f9f.png";
  public scrollBannerUrl = "assets/images/journal/scroll-banner.png";

  constructor() { }

  ngOnInit() {
  }

}
