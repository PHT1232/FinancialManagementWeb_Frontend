import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sideBar/sidebar/sidebar.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

//Material UI
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

//PrimeNg UI
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeSelectModule } from 'primeng/treeselect';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

//Ngx
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//My style component
import { ModalFooterComponent } from 'src/shared/modal-footer/modal-footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamsComponent } from './teams/teams.component';
import { CreateTeamsComponent } from './teams/create-teams/create-teams.component';
import { TestComponent } from './tests/test/test.component';
import { ChatComponent } from './teams/chat/chat.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ModalFooterComponent,
    TeamsComponent,
    CreateTeamsComponent,
    TestComponent,
    ChatComponent,
    LoginComponent,
    CreateComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    DividerModule,
    CardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ScrollPanelModule,
    PaginatorModule,
    ButtonModule,
    NgbModule,
    BsDatepickerModule,
    DropdownModule,
    ReactiveFormsModule,
    MatSelectModule,
    DynamicDialogModule,
    TreeSelectModule,
    FontAwesomeModule,
    TableModule,
    DialogModule,
    HttpClientModule,
    SpeedDialModule,
    TabViewModule,
    InputMaskModule,
    InputTextModule,
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
