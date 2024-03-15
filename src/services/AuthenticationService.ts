import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { ApplicationUser } from "./models/authModel/ApplicationUser";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { LoginInfo } from "./models/authModel/LoginInfo";
import { JwtHelperService } from "@auth0/angular-jwt";

const authenServiceUrl = 'https://localhost:7279/api/authenticate' 
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private userSubject!: BehaviorSubject<LoginInfo | null>;
    public user!: Observable<LoginInfo | null>;

    constructor(
        private router: Router,
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    public isUserAuthenticated = (): boolean => {
        const token = localStorage.getItem("token");
     
        return !this.jwtHelper.isTokenExpired(token);
      }

    login(username: string, password: string) {
        let loginUser = new ApplicationUser();
        loginUser.userName = username;
        loginUser.password = password;
        let loginUrl = authenServiceUrl + '/login'
        return this.http.post<LoginInfo>(loginUrl, loginUser).pipe(
            map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', user.token);
                this.userSubject.next(user);
                return user;
            })
        )
    }

}