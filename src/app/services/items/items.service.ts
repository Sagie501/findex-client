import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Item } from '../../shared/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  fetchItemsByUsername(username: string) {
    return this.httpClient.get(environment.serverUrl + `/api/items/byUser/${username}`);
  }

  deleteItem(id) {
    return this.httpClient.delete(environment.serverUrl + `/api/items/${id}`);
  }

  updateItem(item: Item) {
    return this.httpClient.put(environment.serverUrl + `/api/items/${item.id}`, item);
  }
}
