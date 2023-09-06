import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReciptComponent } from './recipt/recipt.component';

const routes: Routes = [
  { path: 'receipt', component: ReciptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
