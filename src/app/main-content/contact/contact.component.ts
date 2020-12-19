import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactForm } from 'src/app/models/contact-form';

@Component({
  selector: 'messing-around-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // class variables
  contactFormObject: ContactForm = new ContactForm();
  firstName : FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.contactFormObject.FirstName = "Stephen";
    this.firstName = new FormControl(this.contactFormObject.FirstName);
  }

}
