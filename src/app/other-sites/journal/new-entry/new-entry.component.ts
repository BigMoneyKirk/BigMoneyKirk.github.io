import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { JournalEntry } from 'src/app/models/journalentry';
import { NotificationModalService } from 'src/app/modals/notification-modal.service';

@Component({
  selector: 'messing-around-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  // TO-DO: This needs to be set dynamically
  private currentUsername = 'steve';
  private editModal: string = `EditJournalEntry`

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

  constructor(private fb: FormBuilder, public firebaseService: FirebaseService, public imageService: GlobalImageService, private router: Router, private ngxSmartModalService: NgxSmartModalService, private notificationService: NotificationModalService) {

  }

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewInit(){
    this.ngxSmartModalService.getModal(this.editModal).onAnyCloseEventFinished.subscribe(() => {
      this.onClose();
    });
    this.ngxSmartModalService.getModal(this.editModal).onDismissFinished.subscribe(() => {
      this.onDismiss();
    });
  }

  public createForm() {
    this.entry = this.ngxSmartModalService.getModalData(this.editModal);

    this.newJournalEntryForm = this.fb.group({
      title: [this.entry.title, Validators.required],
      entry: [this.entry.entry, Validators.required]
    });
  }

  public onSubmit() {
    this.firebaseService.editJournalEntry(this.currentUsername, this.entry.id, this.entry).subscribe(data => {
      this.notificationService.success("This entry updated successfully.");
      this.ngxSmartModalService.getModal(this.editModal).removeData().close();
    }
    );
  }

  public onClose(){
    this.ngxSmartModalService.getModal(this.editModal).removeData();
  }

  public onDismiss(){
    this.onClose();
  }
}
