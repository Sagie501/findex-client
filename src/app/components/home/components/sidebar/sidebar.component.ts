import { Component, OnInit } from '@angular/core';
import { getGreetingSentence } from '../../../../shared/helpers/greeting-sentence';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  getGreetingSentence = getGreetingSentence;

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  isActiveRoute(route: string) {
    return this.router.url === route;
  }

  logout() {
    this.userService.setConnectedUser(null);
  }
}
