import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "src/services/AuthenticationService";

class PermissionService {
    constructor (private router: Router,
        private accountService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user = this.accountService.userValue;
        if (user == null) {
            return false;
        }

        if (route.data[''])

        this.router.navigate(['/account/login'], { queryParams: {returnUrl: state.url}});
        return false;
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionService).canActivate(next, state);
}