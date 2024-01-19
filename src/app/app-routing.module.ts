import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TestComponent } from './tests/test/test.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
