import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-collapsable-nav-item',
  templateUrl: './collapsable-nav-item.component.html',
  styleUrls: ['./collapsable-nav-item.component.css']
})
export class CollapsableNavItemComponent implements OnInit {

  show: boolean = false;
  
  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  routes: string;

  active: boolean = false;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.canActivate();
    this.router
        .events
        .subscribe(event => {
          if(event instanceof NavigationEnd) 
            this.canActivate();
        });
  }

  canActivate() {
    this.active = this.routes.split(',').some(route => route == this.router.url);
    this.show = this.active;
  }

  toggle() {
    this.show = !this.show;
  }

}
