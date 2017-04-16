import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

export interface LoginResult {
  email: string;
}

@Injectable()
export class LoginService {

  constructor(
    private http: Http
  ) { }

  login(email: string, password: string): Promise<Response> {
    return this.http
      .post('http://localhost:5000/auth', null, {
        headers: new Headers({
          'Authorization': `X-VEEDEALS-USERPASS ${email}:${password}`
        }) 
      })
      .toPromise();
  }
}
