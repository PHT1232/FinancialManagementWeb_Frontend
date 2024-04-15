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

    constructor(
        private router: Router,
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) {
    }

    public isGranted = (permission: string): boolean => {
        const token = localStorage.getItem('token');
        if (this.jwtHelper.isTokenExpired(token)) {
            return false;
        }
        if (token) {
            let isRoleIsExist = false;
            const decodedToken = this.jwtHelper.decodeToken(token);
            let role: any[] = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            role.forEach(element => {
                if (element === permission) {
                    isRoleIsExist = true
                }
            });
            if (isRoleIsExist) {
                return true;
            }
        }
        return false;
    }

    login(username: string, password: string) {
        let loginUser = new ApplicationUser();
        loginUser.userName = username;
        loginUser.password = password;
        let loginUrl = authenServiceUrl + '/login';
        return this.http.post<LoginInfo>(loginUrl, loginUser);
    }

    register(userName: string, password: string) {
        let registerUser = new ApplicationUser();
        registerUser.userName = userName;
        registerUser.password = password;
        let registerUrl = authenServiceUrl + '/register';
        return this.http.post(registerUrl, registerUser);
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['/account/login'])
    }
}