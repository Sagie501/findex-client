import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Item } from '../../../shared/models/item.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  fetchItemsByUsername(username: string) {
    return this.httpClient.get(
      environment.serverUrl + `/api/items/byUser/${username}`
    );
  }

  deleteItem(id) {
    return this.httpClient.delete(environment.serverUrl + `/api/items/${id}`);
  }

  updateItem(item: Item) {
    return this.httpClient.put(
      environment.serverUrl + `/api/items/${item.id}`,
      item
    );
  }

  getItemsCategoryStatistics() {
    return this.httpClient.get(
      environment.serverUrl + `/api/items/getItemsAmountInEachCategory`
    );
  }

  searchItems(itemName: string, category: string, city: string) {
    itemName = itemName && itemName.length !== 0 ? itemName : '*';
    category = category && category.length !== 0 ? category : '*';
    city = city && city.length !== 0 ? city : '*';

    return this.httpClient.get(
      environment.serverUrl +
        `/api/items/filterByParams/${itemName}/${
          category ? `${category}/${city}` : ''
        }`
    );
  }

  addItem(item: Item) {
    return this.httpClient.post(environment.serverUrl + '/api/items', {
      name: item.name,
      category: item.category,
      city: item.city,
      username: this.userService.connectedUser.username,
      kind: 'ForDelivery',
      description: 'No description',
    });
  }

  fetchAllItems() {
    return this.httpClient.get(environment.serverUrl + `/api/items/`);
  }
}
