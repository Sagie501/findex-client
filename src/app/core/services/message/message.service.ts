import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private httpClient: HttpClient) {}

  searchMessages(
    destUser: string,
    sourceUser: string,
    title: string,
    content: string
  ) {
    return this.httpClient.get(
      environment.serverUrl +
        `/api/messages/filterMessages/${sourceUser}/${destUser}${
          title ? `/${title}/${content}` : ''
        }`
    );
  }

  getMessagesByUser(username: string) {
    return this.httpClient.get(
      environment.serverUrl + `/api/messages/byUser/${username}`
    );
  }

  createMessage(newMessage: any) {
    return this.httpClient.post(
      environment.serverUrl + `/api/messages`,
      newMessage
    );
  }

  deleteMessage(id) {
    return this.httpClient.delete(environment.serverUrl + `/api/messages/${id}`);
  }
}
