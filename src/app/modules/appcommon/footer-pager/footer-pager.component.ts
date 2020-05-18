import { Component, OnInit, Input } from '@angular/core';
import { FooterPagerService } from './footer-pager.service';
import { Observable, from, range } from 'rxjs';
import { toArray, tap } from 'rxjs/operators';

@Component({
  selector: 'app-footer-pager',
  templateUrl: './footer-pager.component.html',
  styleUrls: ['./footer-pager.component.css']
})
export class FooterPagerComponent implements OnInit {

  currentPage = 1;

  @Input()
  take = 5;

  pages: Observable<any>;

  totalPages = 0;
  total = 0;

  @Input()
  pageName: string;

  constructor(private pagerService: FooterPagerService) { }

  ngOnInit() {
    this.pagerService
        .getPage(this.pageName, this.take, 0)
        .subscribe(res => this.createPages(res.Total));
  }

  createPages(total) {
    this.total = total;
    this.pages = range(1, Math.ceil(total / this.take)).pipe(toArray(), tap(res => this.totalPages = res.length));
  }

  goTo(pageNumber) {
    this.currentPage = pageNumber;
    this.pagerService
        .getPage(this.pageName, this.take, this.take * (pageNumber - 1))
        .subscribe();
  }

  prev() {
    this.currentPage = this.currentPage - 1;
    this.goTo(this.currentPage);
  }

  next() {
    this.currentPage = this.currentPage + 1;
    this.goTo(this.currentPage);
  }

}
