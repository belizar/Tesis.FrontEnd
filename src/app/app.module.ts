import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { environment } from 'src/environments/environment';
import { HomeModule } from './modules/home/home.module';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { httpInterceptorProviders } from './interceptors';
import { GlobalEffects } from './store/effects/global.effects';
import { AppcommonModule } from './modules/appcommon/appcommon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseModule } from './modules/firebase/firebase.module';

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
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AdminModule,
    HomeModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([GlobalEffects]),
    NgbModule,
    AppcommonModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseModule
  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: environment.graphql}),
      cache: new InMemoryCache()
    });
  }
}
