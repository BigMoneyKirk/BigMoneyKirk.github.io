import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isLoginMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
  }

}
