import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/helpers/error-state-matcher';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  signUpForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.checkIfMatchingPasswords.bind(this),
    ]),
    city: new FormControl('', [Validators.required])
  });
  signUpErrorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  checkIfMatchingPasswords(control: AbstractControl): ValidationErrors | null {
    if (this.signUpForm) {
      let password = this.signUpForm.value.password,
        confirmPassword = control.value;
      if (password !== confirmPassword) {
        return {
          mismatchPasswords: true,
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  onSubmit() {
    let user: User = {
      fullName: this.signUpForm.get('fullName').value,
      password: this.signUpForm.get('password').value,
      city: this.signUpForm.get('city').value,
      username: this.signUpForm.get('username').value,
      phone: this.signUpForm.get('phone').value
    } as User;
    this.userService.createUser(user).subscribe((data: any) => {
      if (data.success) {
        this.userService.changeUserLoggedInStatus();
        this.userService.setUsername(user.username);
        this.router.navigateByUrl('home');
      } else {
        this.signUpErrorMessage = 'Something went wrong, try again later.'
      }
    });
  }
}
