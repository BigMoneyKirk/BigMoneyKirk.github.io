import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [ AuthService ]
})
export class LoginPageComponent implements OnInit {

  public isLoginMode: boolean = true;
  public isLoading: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      // ...
    }
    else {
      this.authService.signup(email, password).subscribe(data => 
        { console.log(data); this.isLoading = false; },
        error => {
          console.log(error);
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }

}
