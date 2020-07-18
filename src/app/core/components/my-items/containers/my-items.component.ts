import { Component, OnInit } from '@angular/core';
import { getGreetingSentence } from '../../../../shared/helpers/greeting-sentence';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { ItemsService } from '../../../services/items/items.service';
import { Item } from '../../../../shared/models/item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemDialogComponent } from '../components/edit-item-dialog/edit-item-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.less']
})
export class MyItemsComponent implements OnInit {

  items: Array<Item> = [];
  getGreetingSentence = getGreetingSentence;

  constructor(public userService: UserService, private router: Router, private itemsService: ItemsService,
              private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.itemsService.fetchItemsByUsername(this.userService.connectedUser.username).subscribe((data: any) => {
      data.items.forEach((currItem) => {
        this.items.push({
          id: currItem._id,
          name: currItem.name,
          city: currItem.city,
          category: currItem.category.name,
          description: currItem.description
        });
      });
    });
  }

  navigateToNewItem() {
    this.router.navigateByUrl('/home/give-something');
  }

  async openEditItemDialog(item: Item) {
    let itemDialogRef = this.dialog.open(EditItemDialogComponent, {
      autoFocus: false,
      data: item
    });

    itemDialogRef.componentInstance.updateItemEvent.subscribe((updatedItem) => {
      updatedItem.id = item.id;
      updatedItem.description = item.description;
      this.itemsService.updateItem(updatedItem).subscribe((data) => {
        let itemIndex = this.items.findIndex((it) => it.id === item.id);
        this.items.splice(itemIndex, 1, updatedItem);
        this.snackBar.open('Your item has been updated!', 'OK', {
          duration: 3000
        });
      });
    })
  }

  deleteItem(id) {
    this.itemsService.deleteItem(id).subscribe((res: any) => {
      if (res.success) {
        this.items = this.items.filter((currItem) => !(currItem.id === id));
      }
    });
  }
}
