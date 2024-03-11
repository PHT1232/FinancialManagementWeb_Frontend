import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/services/ChatService';
import { SignalrService } from 'src/services/SignalrService';
import { Chat } from 'src/services/models/Chat';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  chats: Chat[] = [];

  constructor(private chatService: ChatService
              , private signalService: SignalrService
              , private http: HttpClient) {}

  ngOnInit(): void {
    this.signalService.startConnection();
    this.signalService.addTransferChatDataListener();
    // this.startHttpRequest();
  }

  // private startHttpRequest = () => {
  //   this.http.get<Chat>('https://localhost:7279/api/chat/Get')
  //     .subscribe(res => {
  //       console.log(res.chatMessage);
  //     })
  // }
}
