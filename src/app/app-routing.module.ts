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
import { RoleComponent } from './tests/role/role.component';
import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/app/teams', pathMatch: 'full'
  },
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
      { path: 'chats', component: PersonalComponent, data: { permission: 'User'}, canActivate: [AuthGuard] },
      { path: 'teams', component: TeamsComponent, data: { permission: 'User' }, canActivate: [AuthGuard] },
      { path: 'user', component: UserComponent, data: { permission: 'Admin' }, canActivate: [AuthGuard] },
      { path: 'test', component: TestComponent },
      { path: 'role', component: RoleComponent, data: { permission: 'Admin' }, canActivate: [AuthGuard] }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
