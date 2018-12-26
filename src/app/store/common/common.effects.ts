import { Injectable } from '@angular/core';
import * as common from '@dv-store/common/common.actions';
import { CommonService } from '@dv-store/common/common.service';
import * as fromRoot from '@dv-store/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class CommonEffects {
  page: any;
  storeKey: any;
  constructor(
    private _actions: Actions,
    private commonService: CommonService,
    private store: Store<fromRoot.AppState>
  ) {}

  @Effect() getCountries$ = this._actions.pipe(
    ofType(common.LOAD_COUNTRIES),
    switchMap((action: any) => {
      return this.commonService.getCountries().pipe(
        map((result: any) => {
          return new common.LoadCountriesSuccess(result.data);
        }),
        catchError(error => {
          return of(new common.LoadCountriesFailed(error));
        })
      );
    })
  );
}
