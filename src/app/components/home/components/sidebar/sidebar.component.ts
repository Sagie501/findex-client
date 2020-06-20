import { Component, OnInit } from '@angular/core';
import { getGreetingSentence } from '../../../../shared/helpers/greeting-sentence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  // TODO: Fix this
  loggedInUser = {
    firstName: 'Sagie'
  }
  getGreetingSentence = getGreetingSentence;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isActiveRoute(route: string) {
    return this.router.url === route;
  }

  logout() {
    // TODO
  }
}
