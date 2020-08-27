import { Injectable } from '@angular/core';
import { IData } from './data';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firestore: AngularFirestore) { }

  saveData (data: IData) {
    this.firestore.collection("data")
 
  }
  data$ = this.firestore
  .collection("data").valueChanges();

}
