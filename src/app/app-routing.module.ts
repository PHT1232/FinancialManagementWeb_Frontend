import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TestComponent } from './tests/test/test.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from 'src/authentication/auth.guard';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'user', component: UserComponent, data: { permission: 'admin' }, canActivate: [AuthGuard] },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
