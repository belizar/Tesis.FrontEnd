import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDatabaseService {

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { }

  addItemToCollection( value, collection) {
    // return this.firestore
    //            .collection(collection)
    //            .add();
  }
  
  add<T>(value) {
  }

  get() {
    return this.firestore.collection('clientes').get();
  }

  newID() {
    return this.firestore.createId();
  }

}
