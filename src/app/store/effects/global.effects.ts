import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NotificationService } from 'src/app/modules/appcommon/notification/notification.service';
import { GlobalActionTypes, ShowError } from '../actions/global.actions';
import { AppState } from '../reducers';



@Injectable()
export class GlobalEffects {

  constructor(
    private actions: Actions,
    private store: Store<AppState>,
    private notification: NotificationService
  ) {

  }

  @Effect({dispatch: false})
  ShowError: Observable<any> = this.actions
                               .pipe( ofType(GlobalActionTypes.SHOW_ERROR),
                                      tap((action: ShowError) => this.notification.Error(action.payload)),
                                      );
  
  @Effect({dispatch: false})
  ShowSuccess: Observable<any> = this.actions
                                .pipe( ofType(GlobalActionTypes.SHOW_SUCCESS),
                                       tap((action: ShowError) => this.notification.Success(action.payload)),
                                      );

}