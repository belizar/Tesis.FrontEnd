import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../appcommon/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isWaiting = false;
  getState: Observable<any>;

  @HostBinding('class') classes = 'wrapper wrapper-full-page';

  return = '';

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {
  }
  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params.return || '/app');
    this.auth
        .logging
        .subscribe(logging => this.isWaiting = logging);
    this.auth.showError.subscribe(() => {
      this.notificationService.Error('EPIC FAIL: Verifique su usuario y su contraseña');
    });
  }

  async login(event, userName, password) {
    event.preventDefault();

    await this.auth.login(userName, password);
    this.router.navigateByUrl(this.return);
  }

}
