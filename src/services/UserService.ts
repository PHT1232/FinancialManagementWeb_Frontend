import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicationUser } from "./models/authModel/ApplicationUser";
import { environment } from "src/shared/environment";
import { UserDisplay } from "./models/Users/UserDisplay";
import { SkipLoading } from "./LoadingInterceptor";

const userServiceUrl = environment.baseUrl + '/user'
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient,
    ) {
    }

    register(email: string, userName: string, password: string, userRealName: string) {
        let registerUser = new ApplicationUser();
        registerUser.email = email;
        registerUser.username = userName;
        registerUser.password = password;
        registerUser.userRealName = userRealName;
        let registerUrl = userServiceUrl + '/register';

        let options: any = {
            observe: "response",
            responseType: "text",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                Accept: "text/plain",
            }),
        }
        return this.http.post(registerUrl, registerUser, options);
    }

    getUserDisplay() {
        let localUrl = userServiceUrl + '/GetUsersForDisplay';
        return this.http.get<UserDisplay[]>(localUrl);
    }
}