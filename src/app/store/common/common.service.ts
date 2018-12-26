import { Injectable } from '@angular/core';
import { DVHttpService } from '@dv-shared/services/http.service';

@Injectable()
export class CommonService {
  constructor(private httpService: DVHttpService) {}

  getCountries() {
    return this.httpService.get('aaaa');
  }
}
