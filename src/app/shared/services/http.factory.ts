import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { Store } from '@ngrx/store';

import * as fromRoot from '@dv-store/store';
import { InterceptedHttp } from './http.interceptor';

export function httpFactory(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  store: Store<fromRoot.AppState>
): Http {
  return new InterceptedHttp(xhrBackend, requestOptions, store);
}
