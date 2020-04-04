import { Component, OnInit } from '@angular/core';
import { MainTitleService } from './main-title.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class MainTitleComponent implements OnInit {
  
  title: string;

  constructor(private mainTitleService: MainTitleService,  private router: Router) { }

  ngOnInit() {
    this.ChangeTitle();
    this.router
    .events
    .subscribe(event => {
      console.log(event);
      console.log(this.router.url)
      if(event instanceof NavigationEnd) 
        this.ChangeTitle();
    });

    this.mainTitleService
        .title
        .subscribe( title => this.title = title);
  }

  ChangeTitle() {
      this.title = this.router
                       .url
                       .replace('/app', '')
                       .split('/')
                       .filter(segment => segment)
                       .map(this.capitalizeSegment)
                       .join(' > ');
  }

  capitalizeSegment(segment) {
    return segment.replace('-', ' ')
                  .split(' ')
                  .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
                  .join(' ')
  }

}
