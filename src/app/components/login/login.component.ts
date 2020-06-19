import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/helpers/error-state-matcher';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { setCookie } from '../../shared/helpers/cookie-setter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  loginErrorMessage: string = '';
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginErrorMessage = undefined;
    this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe((data) => {
      const isLoginSucceed = (data as any).success;
      if (isLoginSucceed) {
        this.userService.changeUserLoggedInStatus();
        this.userService.setUsername((data as any).user.username);
        setCookie('connectedUser', (data as any).user.username, 100);
        this.router.navigateByUrl('home');
      } else {
        this.loginErrorMessage = 'Invalid credentials';
      }
    });
  }
}
