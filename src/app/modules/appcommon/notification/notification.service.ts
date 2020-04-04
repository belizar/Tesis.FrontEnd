import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private show = new EventEmitter<any>();

  constructor() { }

  Show(message: string) {
    this.show.emit(message);
  }

  Error(message: string) {
    this.show.emit({message: message, type: ERROR});
  }

  Info(message: string) {
    this.show.emit({message: message, type: INFO});
  }

  Success(message: string) {
    this.show.emit({message: message, type: SUCCESS});
  }

  SubscribeToShow() {
    return this.show;
  }

}

export const ERROR = 'error';
export const INFO = 'info';
export const SUCCESS = 'success';
