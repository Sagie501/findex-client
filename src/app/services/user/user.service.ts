import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn = window.location.pathname !== '/' ? true : false;
  username: string;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.get(`${environment.serverUrl}/api/users/${username}/${password}`);
  }

  getAllUsers() {
    return this.httpClient.get(environment.serverUrl + `/api/users`);
  }

  changeUserLoggedInStatus() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  setUsername(username: string) {
    this.username = username;
  }

  createUser(user: User) {
    return this.httpClient.post(environment.serverUrl + `/api/users/`, user);
  }
}
