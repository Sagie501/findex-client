import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.userService.connectedUser) {
      this.router.navigateByUrl('/home');
    }
  }
}
