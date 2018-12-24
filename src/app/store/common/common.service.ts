import { Injectable } from '@angular/core';
import { CBHttpService } from '@cb-services/http.service';

@Injectable()
export class CommonService {
  constructor(private httpService: CBHttpService) {}

  getCountries() {
    return this.httpService.get('aaaa');
  }
}
