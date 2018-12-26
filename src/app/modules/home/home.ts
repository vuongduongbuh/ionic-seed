import { Component } from '@angular/core';

@Component({
  selector: 'dv-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class Home {
  initData: any = {
    user_name: null,
    password: null
  };

  login(form) {
    if (form.valid) {

    }
  }
}
