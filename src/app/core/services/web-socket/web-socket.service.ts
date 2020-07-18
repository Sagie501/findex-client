import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket;

  constructor() {
    this.socket = socketIo();
  }

  sendUserID(id: string) {
    this.socket.emit('sendUser', id);
  }

  public newMessage = () => {
    return new Observable((observer) => {
      this.socket.on('newMessage', (message) => {
        observer.next(message);
      });
    });
  }
}
