import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';

// @NgModule({
//     imports: [
//         RouterModule.forChild([
//             {
//                 path: '',
//                 component: AccountComponent,
//                 children: [
//                     { path: 'login', component: LoginComponent },
//                 ]
//             }
//         ])
//     ],
//     exports: [
//         RouterModule
//     ]
// })

const routes: Routes = [
                {
                path: '',
                component: AccountComponent,
                children: [
                    { path: 'login', component: LoginComponent },
                ]
            }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AccountRoutingModule { }
