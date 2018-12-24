import { Injectable } from '@angular/core';
import { CBHttpService } from '@cb-services/http.service';
import * as _ from 'lodash';

import { ApiUrls } from '../../app.constant';

interface ConfirmOTPData {
  phone: number;
  otp_code: string;
  password?: string;
  password_confirmation?: string;
  is_change_password?: boolean;
}

@Injectable()
export class AccountService {
  constructor(private httpService: CBHttpService) {}

  getUserInfo() {
    return this.httpService.get(`${ApiUrls.ACCOUNT.USER_GET}`);
  }

  updateUserInfo(data) {
    const formData = new FormData();
    data._method = 'PATCH';

    _.forOwn(data, (value, key) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });
    return this.httpService.post(
      `${ApiUrls.ACCOUNT.USER_UPDATE}/${data.id}`,
      formData
    );
  }

  login(params) {
    return this.httpService.post(ApiUrls.ACCOUNT.LOGIN, {
      username: 'vuong',
      password: '123456'
    });
  }

  forgotPassword(params) {
    const data = {
      phone: params.phone
    };
    return this.httpService.post(ApiUrls.ACCOUNT.FORGOT_PASSWORD_OTP, data);
  }

  confirmOTP(params) {
    const data: ConfirmOTPData = {
      phone: params.phone,
      otp_code: params.otp
    };

    if (params.isChangePassword) {
      data.password = params.password;
      data.password_confirmation = params.retypePassword;
      data.is_change_password = params.isChangePassword;
    }
    return this.httpService.post(ApiUrls.ACCOUNT.CONFIRM_OTP, data);
  }

  resetPassword(params) {
    return this.httpService.get(
      `${ApiUrls.ACCOUNT.RESET_PASSWORD}/${params.token}/${params.email}/${
        params.password
      }`
    );
  }

  changePassword(params) {
    params._method = 'PATCH';

    return this.httpService.post(ApiUrls.ACCOUNT.CHANGE_PASSWORD, params);
  }
}
