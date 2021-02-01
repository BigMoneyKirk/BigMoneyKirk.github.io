import { Component, OnInit } from '@angular/core';
import { DateFormatterService } from 'src/app/services/date-formatter.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { INgxSmartModalOptions } from 'ngx-smart-modal/src/config/ngx-smart-modal.config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HttpClient } from '@angular/common/http';
import { NotificationModalService } from 'src/app/modals/notification-modal.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'messing-around-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  providers: [FirebaseService]
})
export class JournalComponent implements OnInit {

  // ---------------- Global Variables -----------------

  // TO-DO: This needs to be set dynamically
  private currentUsername = 'steve';
  public emailAddress: string;

  public journal_title: string = '';
  public journal_entry: string = '';

  public journal_entries = [];
  public journalUrl = "https://fontmeme.com/permalink/191015/6ed769f9c99ef18d831273a181e61f9f.png";
  public scrollBannerUrl = "assets/images/journal/scroll-banner-2.PNG";

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

  constructor(private http: HttpClient, private dateFormatter: DateFormatterService, private fb: FormBuilder,
    // https://maximelafarie.com/ngx-smart-modal/#/
    public ngxSmartModalService: NgxSmartModalService, private firebaseService: FirebaseService, private notificationService: NotificationModalService, public firebaseAuth: AngularFireAuth
  ) {
  }

  ngOnInit() {
    this.createForm();
    this.getEntries();
    this.firebaseAuth.user.subscribe(user => {
      console.log("Got the current user in the journal. This is your email address: ", user.email);
      this.emailAddress = user.email;
    })
  }

  // ---------------- Form Stuff -----------------

  public createForm() {
    this.newJournalEntryForm = this.fb.group({
      title: ['', Validators.required],
      entry: ['', Validators.required]
    });
  }

  public onSubmit(value) {
    this.firebaseService.createJournalEntry(this.currentUsername, value).subscribe(() => {
      this.getEntries();
      this.notificationService.success("The message has been saved successfully!");
    }, (error) => {
      this.notificationService.error("There was some trouble saving your journal entry.");
    });
  }

  public deleteJournalEntry(value) {
    // TO-DO: Add an "Are you sure?" modal to the delete functionality
    this.firebaseService.deleteJournalEntry(this.currentUsername, value.id).subscribe(() => {
      this.notificationService.success("The journal entry has been deleted.");
      this.getEntries();
    })
  }

  // ---------------- Date Formatter -----------------

  public dateformat(date: Date) {
    let formattedDate = this.dateFormatter.shortMonthDayYear(date);
    return formattedDate;
  }

  // ---------------- Modal Play -----------------

  public editEntry(data) {
    const opts: INgxSmartModalOptions = {
      backdrop: true
    };
    var modal = this.ngxSmartModalService.create(`EditJournalEntry`, NewEntryComponent, opts)
    modal.setData(data).open();
  }

  // ---------------- Firebase Functions -----------------

  public getEntries() {
    this.firebaseService.getJournalEntries(this.currentUsername)
    .subscribe(entries => {
      this.journal_entries = entries;
    });
  }

  public onDismiss(){
    console.log("onDismiss()");
  }

  public onClose(){
    console.log("onClose()");
  }
}
