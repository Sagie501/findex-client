import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasswordDialogComponent } from '../components/password-dialog/password-dialog.component';
import { CityDialogComponent } from '../components/city-dialog/city-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../../../shared/models/user.model';
import { PhoneDialogComponent } from '../components/phone-dialog/phone-dialog.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.less']
})
export class MyAccountComponent implements OnInit {

  dialogRef: MatDialogRef<CityDialogComponent | PasswordDialogComponent | PhoneDialogComponent>

  constructor(public userService: UserService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openPhoneDialog() {
    this.dialogRef = this.dialog.open(PhoneDialogComponent, {
      autoFocus: false,
      data: {
        phone: this.userService.connectedUser.phone
      }
    });

    this.dialogRef.componentInstance.changeUserEvent.subscribe((newPhone) => {
      let user: User = {
        ...this.userService.connectedUser,
        phone: newPhone
      } as User;
      this.userService.saveUser(user).subscribe((data: any) => {
        if (data.success) {
          this.snackBar.open('Your user updated!', 'OK', {
            duration: 3000
          });
          this.userService.setConnectedUser(user);
        } else {
          this.snackBar.open('Your user didn\'t updated!', 'OK', {
            duration: 3000
          });
        }
        this.dialogRef.close();
        this.dialogRef = null;
      });
    });
  }

  openPasswordDialog() {
    this.dialogRef = this.dialog.open(PasswordDialogComponent, {
      autoFocus: false,
      data: {
        password: this.userService.connectedUser.password
      }
    });

    this.dialogRef.componentInstance.changeUserEvent.subscribe((newPassword) => {
      let user: User = {
        ...this.userService.connectedUser,
        password: newPassword
      } as User;
      this.userService.saveUser(user).subscribe((data: any) => {
        if (data.success) {
          this.snackBar.open('Your user updated!', 'OK', {
            duration: 3000
          });
          this.userService.setConnectedUser(user);
        } else {
          this.snackBar.open('Your user didn\'t updated!', 'OK', {
            duration: 3000
          });
        }
        this.dialogRef.close();
        this.dialogRef = null;
      });
    });
  }

  openAddressDialog() {
    this.dialogRef = this.dialog.open(CityDialogComponent, {
      autoFocus: false,
      data: {
        city: this.userService.connectedUser.city
      }
    });

    this.dialogRef.componentInstance.changeUserEvent.subscribe((newCity) => {
      let user: User = {
        ...this.userService.connectedUser,
        city: newCity
      } as User;
      this.userService.saveUser(user).subscribe((data: any) => {
        if (data.success) {
          this.snackBar.open('Your user updated!', 'OK', {
            duration: 3000
          });
          this.userService.setConnectedUser(user);
        } else {
          this.snackBar.open('Your user didn\'t updated!', 'OK', {
            duration: 3000
          });
        }
        this.dialogRef.close();
        this.dialogRef = null;
      });
    });
  }
}
