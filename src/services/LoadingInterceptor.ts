import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingService } from "./LoadingService";
import { finalize, Observable } from "rxjs";

export const SkipLoading = new HttpContextToken<boolean>(() => false);

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.context.get(SkipLoading)) {
            return next.handle(req);
        }

        this.loadingService.loadingOn();
        
        return next.handle(req).pipe(
            finalize(() => {
                this.loadingService.loadingOff();
            })
        )
    }
}