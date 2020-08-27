import { Injectable } from '@angular/core';
import { IData } from './data';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firestore: AngularFirestore) { }

  saveData (id, data: IData) {
    this.firestore.collection("users").doc(id).set(data)
 
  }
  getData(id) {
    return this.firestore
    .collection<IData>("users").doc(id).valueChanges();
  }

}
