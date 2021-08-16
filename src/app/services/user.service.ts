import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.md';
import { Observable } from 'rxjs'

@Injectable()
export class UserService {
urlBase: any='http://127.0.0.1:8000';

constructor(public http:HttpClient) {}

  get_user(token: string | null): Observable<User[]>{

    return this.http.get<User[]>(`${this.urlBase}/users/`,{headers: {
      'Authorization': `JWT ${token}`
    } });
  }

}
