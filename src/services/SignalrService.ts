import { Injectable } from "@angular/core";
import { Chat } from "./models/Chat";
import * as signalR from "@microsoft/signalr"

@Injectable({
    providedIn: 'root'
})
export class SignalrService {
    public data!: Chat[];
    
    private hubConnection!: signalR.HubConnection;

    public startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl('https://localhost:7279/api/chat')
                                .build();
        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err));
    }

    public addTransferChatDataListener = () => {
        this.hubConnection.on('TransferChartData', (data) => {
            this.data = data;
            console.log(data);
        });
    }
}