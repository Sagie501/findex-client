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

  categoriesColors: Array<string> = [
    '#2ecc71',
    '#e74c3c',
    '#3498db',
    '#f1c40f',
  ];

  amountOfItemsInEachCategory: Array<any> = [];

  constructor(private categoryService: CategoryService, private itemsService: ItemsService) { }

  ngOnInit(): void {
    forkJoin([this.categoryService.fetchAllCategories(), this.itemsService.getItemsCategoryStatistics()]).subscribe((res) => {
      let categories: Array<any> = (res[0] as any).categories;
      let itemPerCategory: Array<any> = (res[1] as any).categories;
      categories.forEach((category) => {
        let itemInCategory = itemPerCategory.find((currCategory) => currCategory._id === category._id);
        this.amountOfItemsInEachCategory.push({
          ...category,
          count: itemInCategory.count
        });
      });
    });
  }
}
