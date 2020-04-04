import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainTitleService {


  title = new EventEmitter<string>();
  constructor() { }

  newTitle(newTitle) {
    this.title.emit(newTitle);
  }

  
}
