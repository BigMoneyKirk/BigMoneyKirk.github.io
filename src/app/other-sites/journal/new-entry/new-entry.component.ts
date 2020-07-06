import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { JournalEntry } from 'src/app/models/journalentry';
import { JournalComponent } from '../journal.component';

@Component({
  selector: 'messing-around-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  public newJournalEntryForm: FormGroup;
  public entry: JournalEntry;

  public validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required.' }
    ],
    'entry': [
      { type: 'required', message: 'Entry is required.' }
    ]
  };

  constructor(private fb: FormBuilder, public firebaseService: FirebaseService, public imageService: GlobalImageService, private router: Router, private ngxSmartModalService: NgxSmartModalService) {
    
  }

  ngOnInit() {
    this.createForm();
  }
  
  public createForm(){
    this.entry = this.ngxSmartModalService.getModalData('EditJournalEntry');
    
    this.newJournalEntryForm = this.fb.group({
      title: [this.entry.title, Validators.required ],
      entry: [this.entry.entry, Validators.required ]
    });
  }

  public onSubmit(value){
    
  }
}
