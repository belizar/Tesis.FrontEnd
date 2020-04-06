import { Injectable } from '@angular/core';
import { CommonService } from '../../home/home/common.service';
import { getPage } from 'src/app/graphql/queries';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FooterPagerService {

  page = '';

  valueChanges = new Subject();

  constructor(private common: CommonService) { }

  getPage(page, take, skip = 0) {
    this.page = page;
    return this.common
               .Apollo(getPage(page), {Take: take,  Skip: skip})
               .valueChanges
               .pipe(
                 tap(res => this.valueChanges.next(res.data.PageCliente.Data)),
                 map(res => ({
                   Total: res.data.PageCliente.Total
                 }))
                );
  }

  init(page) {

  }

}
