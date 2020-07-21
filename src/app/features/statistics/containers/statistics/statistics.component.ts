import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ItemsService } from 'src/app/core/services/items/items.service';
var createCountMinSketch = require('count-min-sketch');

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less'],
})
export class StatisticsComponent implements OnInit {
  amountOfItemsInEachCategory = [];

  trigger = '';
  categoriesColors: Array<string> = [
    '#2ecc71',
    '#e74c3c',
    '#3498db',
    '#f1c40f',
  ];

  constructor(
    private categoryService: CategoryService,
    private itemService: ItemsService
  ) {}

  ngOnInit() {
    // amount of each category
    this.categoryService.fetchAllCategories().subscribe((data) => {
      (data as any).categories.forEach((currCategory) => {
        this.amountOfItemsInEachCategory.push(currCategory);
      });
      this.countAmountsOfEachCategory();
    });
  }

  private countAmountsOfEachCategory() {
    this.itemService.getItemsCategoryStatistics().subscribe((data: any) => {
      let sketch = createCountMinSketch();
      let cms = sketch.fromJSON(data.categories);
      for (const currCategory of this.amountOfItemsInEachCategory) {
        currCategory.amount = cms.query(currCategory.name);
      }
      this.trigger = 'triger';
      this.amountOfItemsInEachCategory = this.amountOfItemsInEachCategory.filter(
        (cat) => cat.amount
      );
    });
  }
}