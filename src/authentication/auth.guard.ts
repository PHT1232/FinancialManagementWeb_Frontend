import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "src/services/AuthenticationService";

@Injectable({
    providedIn: 'root'
}) 
class PermissionService {
    constructor (private router: Router,
        private authenService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user = this.authenService.userValue;
        if (user == null) {
            this.router.navigate(['/account/login'], { queryParams: {returnUrl: state.url}});
            return false;
        }

        if (this.authenService.isUserAuthenticated()) {
            return true;
        }

        if (route.data[''])

        this.router.navigate(['/account/login'], { queryParams: {returnUrl: state.url}});
        return false;
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionService).canActivate(next, state);
}