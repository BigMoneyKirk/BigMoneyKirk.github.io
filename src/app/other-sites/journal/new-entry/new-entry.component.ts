import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'messing-around-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  public newJournalEntryForm: FormGroup;

  public validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required.' }
    ]
  };

  constructor(private fb: FormBuilder, public firebaseService: FirebaseService, public imageService: GlobalImageService, private router: Router) {
    
  }

  ngOnInit() {
    this.createForm();
  }
  
  public createForm(){
    this.newJournalEntryForm = this.fb.group({
      title: ['', Validators.required ],
    });
  }

  public onSubmit(value){
    
  }
}
