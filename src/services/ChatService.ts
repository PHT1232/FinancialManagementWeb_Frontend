import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Chat } from './models/Chat';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
   currentChat = this.socket.fromEvent<Chat>('chat');
   chats = this.socket.fromEvent<string[]>('chats'); 

   constructor(private socket: Socket) {
    
   }

}