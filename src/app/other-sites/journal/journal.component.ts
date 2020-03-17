import { Component, OnInit } from '@angular/core';
import { JournalEntry } from 'src/app/models/journalentry';
import * as moment from 'moment';
import { DateFormatterService } from 'src/app/services/date-formatter.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { INgxSmartModalOptions } from 'ngx-smart-modal/src/config/ngx-smart-modal.config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import firebase from 'firebase';
import { listenToTriggers } from 'angular-bootstrap-md/lib/free/utilities';

@Component({
  selector: 'messing-around-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  // ---------------- Global Variables -----------------

  public journal_title: string = '';
  public journal_entry: string = '';

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
    ],
    'entry': [
      { type: 'required', message: 'Entry is required.' }
    ]
  };

  // ---------------- Constructor -----------------

  constructor(private dateFormatter: DateFormatterService, private fb: FormBuilder, public ngxSmartModalService: NgxSmartModalService, private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.createForm();
    this.firebaseStuff();
  }

  // ---------------- Form Stuff -----------------

  public createForm() {
    this.newJournalEntryForm = this.fb.group({
      title: ['', Validators.required],
      entry: ['', Validators.required]
    });
  }

  public onSubmit(value) {
    // TO-DO: I need to call the firebase service so that I can add the entry to the backend
  }

  // ---------------- Date Formatter -----------------

  public dateformat(date: Date) {
    let formattedDate = this.dateFormatter.shortMonthDayYear(date);
    return formattedDate;
  }

  // ---------------- Modal Play -----------------

  public createNewModal() {
    const opts: INgxSmartModalOptions = {
      backdrop: true
    };
    this.ngxSmartModalService.create('NewJournalEntry', NewEntryComponent, opts).open();
  }

  // ---------------- Firebase Functions -----------------

  public firebaseStuff() {
    //#region title and entry 
    const dbRefObject = firebase.database().ref().child('object');

    dbRefObject.on('value',
      snap => {
        this.journal_title = JSON.stringify(snap.val().name).replace(/['"]+/g, '');
        this.journal_entry = `My favorite number is ${JSON.stringify(snap.val().favNumber)}.`;
      });
    //#endregion

    const listElement = document.getElementById('list');
    const dbRefList = dbRefObject.child('hobbies');
    var titleArray = [];
    dbRefList.on('child_added', snap => {
      titleArray.push(snap.val());
      this.journal_entries = new Array<JournalEntry>();
      var i = titleArray.length - 1;
      var j = 0;

      titleArray.forEach(element => {
        var date = new Date();
        date.setDate(date.getDate() - i);
        this.journal_entries.push(new JournalEntry(j+1, titleArray[i], true, date));
        i--;
        j++;
      });
      
      // this.journalEntry1 = new JournalEntry(1, snap.val(), true, new Date());
      // this.journal_entries.push(this.journalEntry1);
    });

  }
}
