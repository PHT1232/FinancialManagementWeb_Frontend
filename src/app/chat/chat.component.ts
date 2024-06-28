import { Component, Input } from '@angular/core';
import { Window } from '@popperjs/core';
import { ChatMessageModel } from 'src/services/models/ChatModels/ChatMessageModel';
import { SignalrService } from 'src/services/SignalrService';
import { UserChatService } from 'src/services/UserChatService';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  @Input() selectedUser: string = "";

  height: number = 100;

  value: string = "";

  chatMessage: ChatMessageModel = new ChatMessageModel();

  isEmojiPickerVisible!: boolean;

  constructor (private signalService: SignalrService
              , private userChatService: UserChatService) 
      {
        this.signalService.startConnection();
        this.signalService.messageListener();
        this.signalService.addConnectedUserListener();
      }

  addEmoji(event: any) {
    this.height = 100;

    this.value += event.emoji.native;
    this.isEmojiPickerVisible = false;
  }

  sendMessage() {
    let userId = localStorage.getItem('userId');

    if (userId !== null) {
      this.chatMessage.chatSessionId = 0;
      this.chatMessage.sentId = userId;
      this.chatMessage.receivedId = this.selectedUser;
      this.chatMessage.message = this.value;
    }

    this.userChatService.sendMessages(this.chatMessage).subscribe({
      next: () => {
        console.log("lol")
      },
      error: (errorRes) => {        
        console.log("lal")
      }
    });
  }

  openEmojimart() {
    if (this.height === 65) {
      this.height = 100;
    } else {
      this.height = 65;
    }
    this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
  }
}
