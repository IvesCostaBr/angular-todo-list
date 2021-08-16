import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable()
export class LoginService {
urlBase:string

constructor(private http:HttpClient) {
  this.urlBase = 'http://127.0.0.1:8000'
}


  login(email:string, password:string): Observable<any>{
    const body = { email: email, password:password }
    return this.http.post(`${this.urlBase}/login/`, body);
  }

  checkouToken(token:string | null ): Observable<any>{
    const body = { token };
    return this.http.post(`${this.urlBase}/token-verify/`, body);
  }

  saveTokenSession(token: string ){
    window.sessionStorage.setItem("token", token);
  }

  getTokenSession(){

    const token_value = window.sessionStorage.getItem("token");
    return token_value;

  }

  removeTokenSession(){
    window.sessionStorage.removeItem("token")
  }
}
