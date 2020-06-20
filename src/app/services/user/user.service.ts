import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  connectedUser: User = JSON.parse(localStorage.getItem('connectedUser'));

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.get(`${environment.serverUrl}/api/users/${username}/${password}`);
  }

  getAllUsers() {
    return this.httpClient.get(environment.serverUrl + `/api/users`);
  }

  setConnectedUser(user: User) {
    if (user) {
      this.connectedUser = user;
      localStorage.setItem('connectedUser', JSON.stringify(user));
    } else {
      this.connectedUser = null;
      localStorage.removeItem('connectedUser');
    }
  }

  createUser(user: User) {
    return this.httpClient.post(environment.serverUrl + `/api/users/`, user);
  }
}
