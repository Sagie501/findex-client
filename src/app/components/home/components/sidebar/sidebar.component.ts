import { Component, OnInit } from '@angular/core';
import { getGreetingSentence } from '../../../../shared/helpers/greeting-sentence';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  getGreetingSentence = getGreetingSentence;
  weather: string;

  constructor(private router: Router, public userService: UserService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.weatherUrl).subscribe((res: any) => {
      this.weather = res.main.temp;
    });
  }

  isActiveRoute(route: string) {
    return this.router.url === route;
  }

  logout() {
    this.userService.setConnectedUser(null);
  }
}
