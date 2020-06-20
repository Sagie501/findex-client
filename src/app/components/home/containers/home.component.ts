import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../../services/web-socket/web-socket.service';
import { UserService } from '../../../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private webSocketService: WebSocketService, private userService: UserService) { }

  ngOnInit(): void {
    this.webSocketService.sendUserID(this.userService.connectedUser.username);
    this.webSocketService.newMessage().subscribe((message: any) => {
      Swal.fire(
        `New Message from ${message.sourceUser}!`,
        message.title
      )
    });
  }
}
