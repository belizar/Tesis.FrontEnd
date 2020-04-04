import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MainTitleService } from '../main-title/main-title.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit, AfterViewInit {
  
  @Input()
  icon: string;

  @Input()
  text: string;
  
  @Input()
  active: boolean = false;
  
  constructor(private mainTitleService: MainTitleService) { }
  
  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    if(this.active) {
      this.mainTitleService.newTitle(this.text);
    }
  }

  onNavItem() {
    this.mainTitleService.newTitle(this.text);
  }

}
