import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isUserLogged = this.authService.isLoggedIn();

  constructor(private authService: AuthService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openSignUpPopup(): void {
    this.dialog.open(SignInComponent);
  }

  public signOut(): void {
    this.authService.SignOut();
  }

}
