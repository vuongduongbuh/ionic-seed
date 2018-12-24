import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class Login {
  initData: any = {
    user_name: null,
    password: null
  };

  login(form) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
