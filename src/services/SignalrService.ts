import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr"
import { environment } from "src/shared/environment";

@Injectable({
    providedIn: 'root'
})
export class SignalrService {
    
    private hubConnection!: signalR.HubConnection;

        public startConnection = () => {
        let token = localStorage.getItem('token');
        this.hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl(environment.baseUrl + '/chat', { accessTokenFactory: () => {
                                    if (token === null) {
                                       return ""
                                    }
                                    return token;
                                }})
                                .build();
    
        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err));
    }

    public messageListener = () => {
        this.hubConnection.on('MessageListener', (user: string, message: string) => {
            console.log(user);
            console.log(message);
        });
    }

    public addConnectedUserListener = () => {
        this.hubConnection.on('connected', (users: string[]) => {
            console.log(users);
        })
    }

    public send = (userId: string, chatMessage: string) => {
        this.hubConnection.send("SendChatMessage", userId, chatMessage);
    }

    public getConnectedUser = () => {
        this.hubConnection.send("getConnectedUser");
    }
}