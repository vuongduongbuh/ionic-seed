import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import * as account from '@dv-store/account/account.actions';
import { AccountService } from '@dv-store/account/account.service';
import * as fromRoot from '@dv-store/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AccountEffects {
  page: any;
  storeKey: any;
  constructor(
    private _actions: Actions,
    private accountService: AccountService,
    private store: Store<fromRoot.AppState>,
    private storage: Storage
  ) {}

  @Effect() loadUserInfo$ = this._actions.pipe(
    ofType(account.LOAD_USER_INFO),
    switchMap((action: any) => {
      return this.accountService.getUserInfo().pipe(
        map((result: any) => {
          return new account.LoadUserInfoSuccess(result.data);
        }),
        catchError(error => {
          return of(new account.LoadUserInfoFailed(error));
        })
      );
    })
  );

  @Effect() updateUserInfo$ = this._actions.pipe(
    ofType(account.UPDATE_USER_INFO),
    switchMap((action: any) => {
      return this.accountService.updateUserInfo(action.payload).pipe(
        map((result: any) => {
          return new account.UpdateUserInfoSuccess(result.data);
        }),
        catchError(error => {
          return of(new account.UpdateUserInfoFailed(error));
        })
      );
    })
  );

  @Effect() login$ = this._actions.pipe(
    ofType(account.LOGIN),
    switchMap((action: any) => {
      return this.accountService.login(action.payload).pipe(
        map((result: any) => {
          this.storage.set('token', result.token);
          this.store.dispatch(new account.LoadUserInfo());
          return new account.LoginSuccess(result);
        }),
        catchError(error => {
          return of(new account.LoginFailed(error));
        })
      );
    })
  );

  @Effect() forgotPassword$ = this._actions.pipe(
    ofType(account.FORGOT_PASSWORD),
    switchMap((action: any) => {
      return this.accountService.forgotPassword(action.payload).pipe(
        map((result: any) => {
          return new account.ForgotPasswordSuccess(result);
        }),
        catchError(error => {
          return of(new account.ForgotPasswordFailed(error));
        })
      );
    })
  );

  @Effect() confirmOTP$ = this._actions.pipe(
    ofType(account.CONFIRM_OTP),
    switchMap((action: any) => {
      return this.accountService.confirmOTP(action.payload).pipe(
        map((result: any) => {
          if (result.access_token) {
            this.store.dispatch(new account.LoadUserInfo());
            return new account.LoginSuccess(result);
          }
          return new account.ConfirmOTPSuccess(result);
        }),
        catchError(error => {
          return of(new account.ConfirmOTPFailed(error));
        })
      );
    })
  );

  @Effect() resetPassword$ = this._actions.pipe(
    ofType(account.RESET_PASSWORD),
    switchMap((action: any) => {
      return this.accountService.resetPassword(action.payload).pipe(
        map((result: any) => {
          return new account.ResetPasswordSuccess(result);
        }),
        catchError(error => {
          return of(new account.ResetPasswordFailed(error));
        })
      );
    })
  );

  @Effect() changePassword$ = this._actions.pipe(
    ofType(account.CHANGE_PASSWORD),
    switchMap((action: any) => {
      return this.accountService.changePassword(action.payload).pipe(
        map((result: any) => {
          return new account.ChangePasswordSuccess(result);
        }),
        catchError(error => {
          return of(new account.ChangePasswordFailed(error));
        })
      );
    })
  );
}
