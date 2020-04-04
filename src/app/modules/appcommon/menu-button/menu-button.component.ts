import { Component, OnInit } from '@angular/core';
import { MenuButtonService } from './menu-button.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  constructor(private menuService: MenuButtonService) { }

  ngOnInit() {
  }

  toggle() {
    
  }

}
