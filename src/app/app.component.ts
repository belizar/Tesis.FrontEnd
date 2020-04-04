import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  title = 'Tesis Analista';

  constructor(private router: Router,
              private auth: AuthService) {

  }

  ngOnInit(): void {
    // if (this.auth.isLoggedIn) {
    // //  this.router.navigate(['app']);
    // } else {
    //  this.router.navigate(['login']);
    // }
  }

}
