import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseApi } from '../core/base-api';

import { User } from '../models/user.model';

@Injectable()
export class UsersService extends BaseApi {
  constructor(public http: Http) {
	  super(http);
  }

  getUserByEmail(email: string): Observable<User> {
   /*  return this.http.get(`http://localhost:3000/users?email=${email}`) <-- сократили код с помощью BaseApi
      .map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined); */
	  return this.get(`users?email=${email}`)
	  .map((user: User[]) => user[0] ? user[0] : undefined);
  }
  
  createNewUser(user: User): Observable<User> {
	  /* return this.http.post('http://localhost:3000/users', user) <-- сократили код с помощью BaseApi
	  .map((response: Response) => response.json()); */
	  return this.post('users', user);
  }
  
}
