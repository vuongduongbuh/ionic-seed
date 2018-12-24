export const environment = {
  production: false
};
export const AppConstants = {
  API_ENDPOINT: ''
};

export const ApiUrls = {
  ACCOUNT: {
    USER_GET: 'wp/v2/users/me',
    USER_UPDATE: 'wp/v2/users/me',
    LOGIN: 'jwt-auth/v1/token',
    FORGOT_PASSWORD_OTP: 'v1/password/forgot/otp',
    CONFIRM_OTP: 'v1/password/reset/otp',
    RESET_PASSWORD: 'v1/password/reset',
    CHANGE_PASSWORD: 'v1/password/update'
  }
};
