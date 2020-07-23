import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../../../shared/models/user.model';
import { Observable, from } from 'rxjs';
import { map, switchMap, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  connectedUser: User = JSON.parse(localStorage.getItem('connectedUser'));
  API_KEY = 'AglqlqQgF_dEaS3S7mR7g--ZYzo_Xfaqy0WS68UwWaisBsU0QREVDSmOPKY_yicD';

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient.get(
      `${environment.serverUrl}/api/users/${username}/${password}`
    );
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

  saveUser(user: User) {
    return this.httpClient.post(environment.serverUrl + `/api/users/`, user);
  }

  getAllUsersLocations(): Observable<number[]> {
    return this.getAllUsers().pipe(
      map((data: any) => data.users),
      map((users: User[]) => users.map((user) => user.city.toLowerCase())),
      map((cities: string[]) => [...new Set(cities)]),
      switchMap((data) => from(data)),
      mergeMap(
        (city) =>
          this.httpClient.get(
            `http://dev.virtualearth.net/REST/v1/Locations?countryRegion=Israel&addressLine=${city}&key=${this.API_KEY}`
          ),
        (_, location) => {
          console.log(location);
          return location;
        }
      ),
      map((data: any) => data.resourceSets[0].resources[0].point.coordinates)
    );
  }
}
