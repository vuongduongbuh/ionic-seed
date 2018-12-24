import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import {
  ConnectionBackend,
  Http,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  Response
} from '@angular/http';
import { Store } from '@ngrx/store';
import * as fromRoot from '@cb-store/store';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptedHttp extends Http {
  store: any;
  public pendingRequests: any = 0;
  public showLoading: boolean;
  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    store: Store<fromRoot.AppState>
  ) {
    super(backend, defaultOptions);
    this.store = store;
  }

  getExceptionListUrl() {
    const listUrl = [];
    return listUrl;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable;
  }

  request(
    res: string | Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.request(res, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options);
  }

  post(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.post(url, body, options);
  }

  put(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.put(url, body, options);
  }

  patch(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.patch(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, options);
  }
}
