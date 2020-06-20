import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/helpers/error-state-matcher';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

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
    this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe((data: any) => {
      if (data.success) {
        this.userService.setConnectedUser(data.user);
        this.router.navigateByUrl('home');
      } else {
        this.loginErrorMessage = 'Invalid credentials';
      }
    });
  }
}
