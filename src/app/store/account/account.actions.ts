import { Action } from '@ngrx/store';

export const LOGIN = '[Account] login';
export const LOGIN_SUCCESS = '[Account] successfully login';
export const LOGIN_FAILED = '[Account] login failed';

export const FORGOT_PASSWORD = '[Account] forgot password';
export const FORGOT_PASSWORD_SUCCESS = '[Account] successfully forgot password';
export const FORGOT_PASSWORD_FAILED = '[Account] forgot password failed';

export const RESET_PASSWORD = '[Account] reset password';
export const RESET_PASSWORD_SUCCESS = '[Account] successfully reset password';
export const RESET_PASSWORD_FAILED = '[Account] reset password failed';

export const CONFIRM_OTP = '[Account] confirm otp password';
export const CONFIRM_OTP_SUCCESS = '[Account] successfully confirm password';
export const CONFIRM_OTP_FAILED = '[Account] confirm password failed';

export const CHANGE_PASSWORD = '[Account] change password';
export const CHANGE_PASSWORD_SUCCESS = '[Account] successfully change password';
export const CHANGE_PASSWORD_FAILED = '[Account] change password failed';

export const LOGOUT = '[Account] Logout';
export const LOGOUT_SUCCESS = '[Account] successfully logout';
export const LOGOUT_FAILED = '[Account] logout failed';

export const LOAD_USER_INFO = '[Account] load user info';
export const LOAD_USER_INFO_SUCCESS = '[Account] successfully load user info';
export const LOAD_USER_INFO_FAILED = '[Account] failed to load user info';

export const UPDATE_USER_INFO = '[Account] update user info';
export const UPDATE_USER_INFO_SUCCESS = '[Account] successfully update user info';
export const UPDATE_USER_INFO_FAILED = '[Account] failed to update user info';

export const RELOAD = '[Account] Reload reducers';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: any) { }
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public payload: any) {
    }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: any) {
    }
}

export class ForgotPassword implements Action {
    readonly type = FORGOT_PASSWORD;
    constructor(public payload: any) { }
}

export class ForgotPasswordFailed implements Action {
    readonly type = FORGOT_PASSWORD_FAILED;
    constructor(public payload: any) {
    }
}

export class ForgotPasswordSuccess implements Action {
    readonly type = FORGOT_PASSWORD_SUCCESS;
    constructor(public payload: any) {
    }
}

export class ResetPassword implements Action {
    readonly type = RESET_PASSWORD;
    constructor(public payload: any) { }
}

export class ResetPasswordFailed implements Action {
    readonly type = RESET_PASSWORD_FAILED;
    constructor(public payload: any) {
    }
}

export class ResetPasswordSuccess implements Action {
    readonly type = RESET_PASSWORD_SUCCESS;
    constructor(public payload: any) {
    }
}

export class ConfirmOTP implements Action {
    readonly type = CONFIRM_OTP;
    constructor(public payload: any) { }
}

export class ConfirmOTPFailed implements Action {
    readonly type = CONFIRM_OTP_FAILED;
    constructor(public payload: any) {
    }
}

export class ConfirmOTPSuccess implements Action {
    readonly type = CONFIRM_OTP_SUCCESS;
    constructor(public payload: any) {
    }
}

export class ChangePassword implements Action {
    readonly type = CHANGE_PASSWORD;
    constructor(public payload: any) { }
}

export class ChangePasswordFailed implements Action {
    readonly type = CHANGE_PASSWORD_FAILED;
    constructor(public payload: any) {
    }
}

export class ChangePasswordSuccess implements Action {
    readonly type = CHANGE_PASSWORD_SUCCESS;
    constructor(public payload: any) {
    }
}


export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(public payload: any) { }
}

export class LogoutFailed implements Action {
    readonly type = LOGOUT_FAILED;
    constructor(public payload: any) {
    }
}

export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;
    constructor(public payload: any) {
    }
}

export class LoadUserInfo implements Action {
    readonly type = LOAD_USER_INFO;
    constructor() { }
}

export class LoadUserInfoFailed implements Action {
    readonly type = LOAD_USER_INFO_FAILED;
    constructor(public payload: any) {
    }
}

export class LoadUserInfoSuccess implements Action {
    readonly type = LOAD_USER_INFO_SUCCESS;
    constructor(public payload: any) {
    }
}

export class UpdateUserInfo implements Action {
    readonly type = UPDATE_USER_INFO;
    constructor(public payload: any) { }
}

export class UpdateUserInfoFailed implements Action {
    readonly type = UPDATE_USER_INFO_FAILED;
    constructor(public payload: any) {
    }
}

export class UpdateUserInfoSuccess implements Action {
    readonly type = UPDATE_USER_INFO_SUCCESS;
    constructor(public payload: any) {
    }
}

export class Reload implements Action {
    readonly type = RELOAD;
    constructor(public payload) {
    }
}
export type AccountActions =
    Login | LoginSuccess | LoginFailed |
    ForgotPassword | ForgotPasswordSuccess | ForgotPasswordFailed |
    ResetPassword | ResetPasswordSuccess | ResetPasswordFailed |
    ConfirmOTP | ConfirmOTPSuccess | ConfirmOTPFailed |
    ChangePassword | ChangePasswordSuccess | ChangePasswordFailed |
    Logout | LogoutSuccess | LogoutFailed |
    LoadUserInfo | LoadUserInfoFailed | LoadUserInfoSuccess |
    UpdateUserInfo | UpdateUserInfoFailed | UpdateUserInfoSuccess |
    Reload;
