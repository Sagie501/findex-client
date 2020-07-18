import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../../../shared/helpers/error-state-matcher';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category/category.service';
import { ItemsService } from '../../services/items/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-something',
  templateUrl: './give-something.component.html',
  styleUrls: ['./give-something.component.less']
})
export class GiveSomethingComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  giveSomethingForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });
  categories: Array<any> = [];

  constructor(private categoryService: CategoryService, private itemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.fetchAllCategories().subscribe((data) => {
      (data as any).categories.forEach((currCategory) => {
        this.categories.push(currCategory.name);
      });
    });
  }

  onSubmit() {
    this.itemsService.addItem(this.giveSomethingForm.value).subscribe((res) => {
      this.router.navigateByUrl('/home/my-items');
    });
  }
}
