import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../../../../../shared/models/item.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category/category.service';
import { MyErrorStateMatcher } from 'src/app/shared/helpers/error-state-matcher';

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  styleUrls: ['./edit-item-dialog.component.less']
})
export class EditItemDialogComponent implements OnInit {

  itemFormGroup: FormGroup = new FormGroup({
    name: new FormControl(this.data.name, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    city: new FormControl(this.data.city, [Validators.required])
  });
  matcher = new MyErrorStateMatcher();
  categories: Array<any> = [];

  @Output() updateItemEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Item, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.fetchAllCategories().subscribe((data) => {
      (data as any).categories.forEach((currCategory) => {
        this.categories.push(currCategory.name);
      });
      let categoryIndex = this.categories.findIndex((category) => category === this.data.category);
      this.itemFormGroup.get('category').patchValue(this.categories[categoryIndex]);
    });
  }
}
