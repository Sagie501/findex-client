import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../../../../../shared/helpers/error-state-matcher';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../../../shared/models/user.model';
import { UserService } from '../../../../../../services/user/user.service';

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.less']
})
export class NewMessageDialogComponent implements OnInit {

  messageFormGroup: FormGroup = new FormGroup({
    destUser: new FormControl(this.data.destUser, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required])
  });
  matcher = new MyErrorStateMatcher();
  users: Array<any> = [];

  @Output() sendNewMessageEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {destUser?: User}, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      (data as any).users.forEach((currUser) => {
        this.users.push((currUser as any).username);
      });
      if (this.data.destUser) {
        let userIndex = this.users.findIndex((user) => user === this.data.destUser.username);
        this.messageFormGroup.get('destUser').patchValue(this.users[userIndex]);
      }
    });
  }
}
