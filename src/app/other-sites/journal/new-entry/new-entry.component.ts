import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { GlobalImageService } from 'src/app/services/global-image.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'messing-around-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  public exampleForm: FormGroup;
  public avatarLink: string = this.imageService.king;

  constructor(public firebaseService: FirebaseService, public imageService: GlobalImageService, private router: Router, private fb: FormBuilder) {
    
  }

  ngOnInit() {
  }

  public onSubmit(value){
    this.firebaseService.createUser(value, this.avatarLink).then(res => {
        this.resetFields();
        this.router.navigate(['/home']);
      });
  }

  public resetFields(){
    this.avatarLink = this.imageService.king;
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }
}
