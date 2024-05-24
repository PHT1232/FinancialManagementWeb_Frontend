import { Injectable } from "@angular/core";
import { Chat } from "./models/Chat";
import * as signalR from "@microsoft/signalr"
import { environment } from "src/shared/environment";

@Injectable({
    providedIn: 'root'
})
export class SignalrService {
    public data!: Chat[];
    
    private hubConnection!: signalR.HubConnection;

    public startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl(environment.baseUrl + 'chat')
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