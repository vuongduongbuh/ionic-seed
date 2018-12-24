import * as account from '@cb-store/account/account.actions';

export interface State {
  loading: Boolean;
  userInfo: any;
  isLoggedIn: any;
}

const initialState: State = {
  loading: false,
  userInfo: {},
  isLoggedIn: false
};

export function reducer(
  state = initialState,
  action: account.AccountActions
): State {
  switch (action.type) {
    case account.LOGIN: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        isLoggedIn: true
      });
    }
    case account.LOGIN_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case account.FORGOT_PASSWORD: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.FORGOT_PASSWORD_SUCCESS: {
      return Object.assign({}, state, {
        loading: false
      });
    }
    case account.FORGOT_PASSWORD_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case account.RESET_PASSWORD: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.RESET_PASSWORD_SUCCESS: {
      return Object.assign({}, state, {
        loading: false
      });
    }
    case account.RESET_PASSWORD_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case account.CONFIRM_OTP: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.CONFIRM_OTP_SUCCESS: {
      return Object.assign({}, state, {
        loading: false
      });
    }
    case account.CONFIRM_OTP_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case account.CHANGE_PASSWORD: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.CHANGE_PASSWORD_SUCCESS: {
      return Object.assign({}, state, {
        loading: false
      });
    }
    case account.CHANGE_PASSWORD_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case account.LOGOUT: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        isLoggedIn: false,
        userInfo: {}
      });
    }
    case account.LOGOUT_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }
    case account.LOAD_USER_INFO: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.LOAD_USER_INFO_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        userInfo: action.payload
      });
    }
    case account.LOAD_USER_INFO_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case account.UPDATE_USER_INFO: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case account.UPDATE_USER_INFO_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        userInfo: action.payload
      });
    }
    case account.UPDATE_USER_INFO_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case account.RELOAD: {
      return Object.assign({}, state, {
        loading: false,
        isLoggedIn: action.payload.isLoggedIn ? true : false,
        userInfo: action.payload.userInfo ? action.payload.userInfo : {},
        userRole: action.payload.userInfo ? action.payload.userInfo.role_id : 0
      });
    }
    default:
      return state;
  }
}

export const getIsLoadingState = (state: State) => state.loading;
export const getIsLoggedIn = (state: State) => state.isLoggedIn;
export const getUserInfo = (state: State) => state.userInfo;
