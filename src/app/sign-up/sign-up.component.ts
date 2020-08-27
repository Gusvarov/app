import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUpForm = this.fb.group({
    email: [''],
    reEmail: [''],
    password: [''],
    rePassword: ['']
  });

  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  public openSignInPopup(): void {
    this.dialog.closeAll();
    this.dialog.open(SignInComponent);
  }

  public onSubmit(): void {
    console.log(this.signUpForm);
    this.authService.SignUp(this.signUpForm.value.email, this.signUpForm.value.password);
  }

}
