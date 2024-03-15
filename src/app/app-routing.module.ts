import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TestComponent } from './tests/test/test.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from 'src/authentication/auth.guard';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './accounts/login/login.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';


const routes: Routes = [
  {
    path: 'account',
    component: AccountsComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'app',
    component: DashbroadComponent,
    children: [
      { path: 'teams', component: TeamsComponent, canActivate: [AuthGuard] },
      { path: 'user', component: UserComponent, data: { permission: 'admin' }, canActivate: [AuthGuard] },
      { path: 'test', component: TestComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
