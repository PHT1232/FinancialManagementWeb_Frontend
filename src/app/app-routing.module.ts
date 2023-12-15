import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReciptComponent } from './recipt/recipt.component';
import { ReceiptCreateComponent } from './recipt/receipt-create/receipt-create.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'receipt', component: ReciptComponent },
  { path: 'receipt/create', component: ReceiptCreateComponent },
  { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
