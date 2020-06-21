import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../../shared/models/message.model';
import { UserService } from '../../../../../services/user/user.service';
import { MessageService } from '../../../../../services/message/message.service';
import { getGreetingSentence } from 'src/app/shared/helpers/greeting-sentence';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewMessageDialogComponent } from '../components/new-message-dialog/new-message-dialog.component';
import { User } from '../../../../../shared/models/user.model';
import { WebSocketService } from '../../../../../services/web-socket/web-socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  getGreetingSentence = getGreetingSentence;

  constructor(public userService: UserService, private messageService: MessageService, private dialog: MatDialog,
              private snackBar: MatSnackBar, private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.fetchMessages();
    this.webSocketService.newMessage().subscribe(() => {
      this.fetchMessages();
    });
  }

  openNewMessageDialog(destUser?: User) {
    let itemDialogRef = this.dialog.open(NewMessageDialogComponent, {
      autoFocus: false,
      data: {
        destUser
      }
    });

    itemDialogRef.componentInstance.sendNewMessageEvent.subscribe((message) => {
      message.sourceUser = this.userService.connectedUser.username;
      this.messageService.createMessage(message).subscribe(() => {
        this.snackBar.open('Your message has been sent!', 'OK', {
          duration: 3000
        });
      });
    })
  }

  fetchMessages() {
    this.messages = [];
    this.messageService.getMessagesByUser(this.userService.connectedUser.username).subscribe((data) => {
      (data as any).messages.forEach((currMessage) => {
        this.messages.push(currMessage);
      });
    });
  }
}
