import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private route: Router,
              private dialog: MatDialog) {
                this.afAuth.authState.subscribe(user => {
                  if (user) {
                    this.userData = user;
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    JSON.parse(localStorage.getItem('user'));
                  } else {
                    localStorage.setItem('user', null);
                    JSON.parse(localStorage.getItem('user'));
                  }
                })
               }

  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.location.reload();
        this.route.navigate(['/home']);
        this.dialog.closeAll();
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        window.location.reload();
        this.route.navigate(['/home']);
        this.dialog.closeAll();
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      window.location.reload();
    })
  }
}
