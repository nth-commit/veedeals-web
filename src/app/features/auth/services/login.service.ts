import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginResult {
  email: string;
}

@Injectable()
export class LoginService {

  constructor() { }

  login(email: string, password: string): Observable<LoginResult> {
    debugger;
    return Observable.of(<LoginResult>{ email });
  }
}
