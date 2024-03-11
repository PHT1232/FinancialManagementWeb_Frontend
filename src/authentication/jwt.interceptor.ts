import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "src/services/AuthenticationService";

const apiUrl = 'https://localhost:7279/api/'
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.authenService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = req.url.startsWith(apiUrl);
        if (isLoggedIn && isApiUrl) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }

        return next.handle(req);
    }
}