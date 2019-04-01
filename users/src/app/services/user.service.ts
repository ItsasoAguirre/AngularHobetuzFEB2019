import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   url = 'https://randomuser.me/api/?results=50';
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.url);
  }
}
