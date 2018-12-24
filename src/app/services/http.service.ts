import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AppConstants } from '@cb-constants';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CBHttpService {
  public header: any;
  public baseURL: string = AppConstants.API_ENDPOINT;
  constructor(private http: Http, private storage: Storage) {}

  get(url): Observable<Response> {
    const header = this.appendHeaders();
    return this.http
      .get(this.baseURL + url, {
        headers: header
      })
      .pipe(map(response => response.json()));
  }

  post(url, data): Observable<Response> {
    const header = this.appendHeaders(data);
    return this.http
      .post(this.baseURL + url, JSON.stringify(data), {
        headers: header
      })
      .pipe(map(response => response.json()));
  }

  put(url, data): Observable<Response> {
    const header = this.appendHeaders();
    return this.http
      .put(this.baseURL + url, JSON.stringify(data), {
        headers: header
      })
      .pipe(map(response => response.json()));
  }

  patch(url, data): Observable<Response> {
    const header = this.appendHeaders();
    return this.http
      .patch(this.baseURL + url, JSON.stringify(data), {
        headers: header
      })
      .pipe(map(response => response.json()));
  }

  delete(url): Observable<Response> {
    const header = this.appendHeaders();
    return this.http
      .delete(this.baseURL + url, {
        headers: header
      })
      .pipe(map(response => response.json()));
  }

  private async getToken() {
    return await this.storage.get('token');
  }

  private appendHeaders(formData = null) {
    const userToken = this.getToken();
    const header = new Headers();

    header.append('Accept', 'application/json, text/plain, */*');
    if (userToken) {
      header.append('Authorization', 'Bearer ' + userToken);
    }

    if (!formData || !(formData instanceof FormData)) {
      header.append('Content-Type', 'application/json');
    }

    return header;
  }
}
