import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../shared/models/item.model';
import { ItemsService } from '../../../../services/items/items.service';
import { User } from '../../../../shared/models/user.model';
import { NewMessageDialogComponent } from '../messages/components/new-message-dialog/new-message-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../../services/user/user.service';
import { MessageService } from '../../../../services/message/message.service';

@Component({
  selector: 'app-take-something',
  templateUrl: './take-something.component.html',
  styleUrls: ['./take-something.component.less']
})
export class TakeSomethingComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemsService: ItemsService, private dialog: MatDialog, private snackBar: MatSnackBar,
              public userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.itemsService.fetchAllItems().subscribe((data) => {
      this.items = (data as any).items.map((currItem) => {
        currItem.owner = currItem.username;
        delete currItem.username;
        return {
          ...currItem,
          category: currItem.category.name
        };
      });
    });
  }

  openNewMessageDialog(destUser: User) {
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
}
