import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/global.service';
import { NotificationModalService } from 'src/app/modals/notification-modal.service';
import { ContactForm } from 'src/app/models/contact-form';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'messing-around-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // class variables
  contactForm: ContactForm = new ContactForm();

  constructor(private firebaseService: FirebaseService, private notificationService: NotificationModalService, private globalService: GlobalService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    this.firebaseService.createContactEntry(this.contactForm).subscribe(() => {
      this.notificationService.success("Your contact information has been submitted successfully. Thank you!");
    }, (error) => {
      this.notificationService.error("An error has occurred when saving you information. Please try again later.");
    });
  }

}
