import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signInForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  public openSignUpPopup(): void {
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent);
  }

  public onSubmit(): void {
    console.log(this.signInForm)
    this.authService.SignIn(this.signInForm.value.email, this.signInForm.value.password);
  }

}
