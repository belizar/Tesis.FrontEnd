import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FireDatabaseService } from './fire-database.service';
import { FireAuthService } from './fire-auth.service';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
const config = {
  apiKey: 'AIzaSyCzD9xDENyLbtw-LGgtpIELG5YVd37KciI',
  authDomain: 'tesis-213dc.firebaseapp.com',
  databaseURL: 'https://tesis-213dc.firebaseio.com',
  projectId: 'tesis-213dc',
  storageBucket: 'tesis-213dc.appspot.com',
  messagingSenderId: '237303208569',
  appId: '1:237303208569:web:d68bc64bafe23e10'
};

@NgModule({
  declarations: [],
  providers: [FireDatabaseService, FireAuthService],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireDatabaseModule
  ]
})
export class FirebaseModule { }
