import { environment } from './../app.constant';
import { ActionReducer, ActionReducerMap, State } from '@ngrx/store';
import * as fromCommon from '@dv-store/common/common.reducer';
import * as fromAccount from '@dv-store/account/account.reducer';
import { storeLogger } from 'ngrx-store-logger';
import { createSelector } from 'reselect';

/*
  Import createSelector from reselect to make selection of different parts of the state fast efficient
 */
/*
  Import the store logger to log all the actions to the console
 */
/*
 Import the layout state
 */
export interface AppState {
  common: fromCommon.State;
  account: fromAccount.State;
}

export const reducers: ActionReducerMap<AppState> = {
  common: fromCommon.reducer,
  account: fromAccount.reducer
};

export function logger(reducer: ActionReducer<AppState>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = !environment.production ? [logger] : [];

/*
Account
*/
export const accountGetState = (state: AppState) => state.account;
export const accountGetIsLoggedInState = createSelector(
  accountGetState,
  fromAccount.getIsLoggedIn
);
export const accountGetUserInfo = createSelector(
  accountGetState,
  fromAccount.getUserInfo
);
export const accountGetILoadingState = createSelector(
  accountGetState,
  fromAccount.getIsLoadingState
);

/*
Common
*/
export const commonGetState = (state: AppState) => state.common;
