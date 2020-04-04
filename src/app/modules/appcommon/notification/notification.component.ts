import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  show: boolean = false;
  message: string;
  type: string = 'info';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService
        .SubscribeToShow()
        .subscribe((payload) => this._show(payload));
  }

  private _show({message, type}) {
    this.message = message;
    this.type = type;
    this.show = true;
    timer(5000).subscribe(x => {
      this.show = false;
      this.message = '';
    });
  }

  close() {
    this.show = false;
  }

}
