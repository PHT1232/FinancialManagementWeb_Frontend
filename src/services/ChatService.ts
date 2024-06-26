import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
//    currentChat = this.socket.fromEvent<Chat>('chat');
//    chats = this.socket.fromEvent<string[]>('chats'); 

   constructor() {
    
   }

   getChat(id: string) {
   }

   getAllChat() {
   }

   sendChat(chat: string) {
   }
}