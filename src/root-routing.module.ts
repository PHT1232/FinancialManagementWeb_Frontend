import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountModule } from './accounts/account.module';
import { AppModule } from './app/app.module';

const routes: Routes = [
    { path: '', redirectTo: '/account', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: () => import('./accounts/account.module').then(m => m.AccountModule)
    },
    {
        path: 'app',
        loadChildren: () => import('./app/app.module').then(m => m.AppModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }
