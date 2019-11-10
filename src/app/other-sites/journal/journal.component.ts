import { Component, OnInit } from '@angular/core';
import { JournalEntry } from 'src/app/models/journalentry';
import * as moment from 'moment';
import { DateFormatterService } from 'src/app/services/date-formatter.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { INgxSmartModalOptions } from 'ngx-smart-modal/src/config/ngx-smart-modal.config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'messing-around-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  public journal_entries: Array<JournalEntry>;

  public journalEntry1: JournalEntry = new JournalEntry(1, 'Journal Entry 1', true, new Date());
  public journalEntry2: JournalEntry = new JournalEntry(2, 'Journal Entry 2', true, new Date());
  public journalUrl = "https://fontmeme.com/permalink/191015/6ed769f9c99ef18d831273a181e61f9f.png";
  public modalText = 'Holla back, yungen; whooo-whoooo!!!!';
  public scrollBannerUrl = "assets/images/journal/scroll-banner.png";

  public newJournalEntryForm: FormGroup;
  public validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required.' }
    ]
  };

  constructor(private dateFormatter: DateFormatterService, private fb: FormBuilder, public ngxSmartModalService: NgxSmartModalService) {
   }

  ngOnInit() {
    this.journal_entries = new Array<JournalEntry>();
    this.journal_entries.push(this.journalEntry1);
    this.journal_entries.push(this.journalEntry2);
    this.createForm();
  }
  
  public createForm(){
    this.newJournalEntryForm = this.fb.group({
      title: ['', Validators.required ],
    });
  }

  public createNewModal(){
    const opts: INgxSmartModalOptions = {
      backdrop: true
    };
    this.ngxSmartModalService.create('NewJournalEntry', NewEntryComponent, opts).open();
  }

  public dateformat(date: Date){
    let huh = this.dateFormatter.shortMonthDayYear(date);
    return huh;
  }

  public onSubmit(value){
    console.log(value);
  }

  public poem(){
    return `Uh huh`;
  }
}
