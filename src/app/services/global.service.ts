import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CBGlobalService {
  constructor(private http: Http) {}
}
