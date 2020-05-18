import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  logging = new EventEmitter<boolean>();
  showError = new EventEmitter<any>();

  constructor(public afAuth: AngularFireAuth, public router: Router) { 
    this.authStateWillChange();
  }

  private authStateWillChange() {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
      this.logging.emit(true);
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      this.logging.emit(false);
      // this.router.navigate(['app']);
      this.afAuth.auth.currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
        // Send token to your backend via HTTPS
        // ...
        console.log(idToken);
      }).catch( (error) => {
        this.logging.emit(false);
        this.showError.emit();
        // Handle error
      });
    } catch (e) {
      this.logging.emit(false);
      this.showError.emit();
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }

  get isLoggedIn() {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

}
