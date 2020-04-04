import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class UrlFormatterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
     return next.handle( 
       !req.url.includes("graphql") 
       ? req.clone({
                url: `${environment.api}${req.url}`
              })
       : req
      )
      
  }
}