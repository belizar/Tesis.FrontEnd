import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isWaiting: boolean = false;
  getState: Observable<any>;

  @HostBinding('class') classes = 'wrapper wrapper-full-page';
  
  return: string = '';

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) { 
  }
  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/app');
    this.auth
        .logging
        .subscribe(logging => this.isWaiting = logging);
  }

  async login(event, userName, password) {
    event.preventDefault();
    
    await this.auth.login(userName, password);
    this.router.navigateByUrl(this.return);
  }

}
