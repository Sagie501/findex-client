import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category/category.service';
import { forkJoin } from 'rxjs';
import { ItemsService } from '../../../../services/items/items.service';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
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



  constructor(private categoryService: CategoryService, private itemService: ItemsService) {

  }

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
    this.itemService.getItemsCategoryStatistics().subscribe((data) => {
      for (const currCategory of this.amountOfItemsInEachCategory) {
        for (const categoryStat of (data as any).categories) {
          if (categoryStat._id === currCategory._id) {
            currCategory.amount = categoryStat.count;
          }
        }
      }
      this.trigger = 'triger';
    });


  }
}
