import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ModalModule.forChild(),
        CheckboxModule,
        PasswordModule,
        InputTextModule,
        AccountRoutingModule,
        ButtonModule,
    ],
    declarations: [
        AccountComponent,
        LoginComponent
    ]
})
export class AccountModule {

}
