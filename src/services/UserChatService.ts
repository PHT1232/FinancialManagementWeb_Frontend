import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/shared/environment";
import { UserDisplay } from "./models/Users/UserDisplay";
import { SkipLoading } from "./LoadingInterceptor";

const userChatServiceUrl = environment.baseUrl + '/user'
@Injectable({
    providedIn: 'root',
})
export class UserChatService {
    
    constructor(
        private http: HttpClient
    ){
    }

    searchUsers(searchValues: string) {
        let localUrl = userChatServiceUrl + "/SearchUsers?searchValues=" + searchValues;
        return this.http.get<UserDisplay[]>(localUrl, {
            context: new HttpContext().set(SkipLoading, true),
        });
    }
}