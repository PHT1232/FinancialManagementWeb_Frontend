import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/services/AuthenticationService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends AppComponent implements OnInit {

  constructor(private authenService: AuthenticationService, injector: Injector, private confirmationService: ConfirmationService) {
    super(injector);
  }

  ngOnInit(): void {
    
  }

  logout(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Bạn có chắc muốn đăng xuất?',
      header: 'Đăng xuất',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this.authenService.logout();
      },
      reject: () => {
      }
  });
  }
}
