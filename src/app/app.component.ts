import { Component, Injector } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router, RouterLink, RouterOutlet, Routes, UrlSegment } from '@angular/router';
import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';
import {Location} from '@angular/common';
import { MessageService } from 'primeng/api';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  events: string[] = [];
  opened: boolean = true;
  title = 'FinancialManagementWeb_Frontend';
  currentRoute!: string;
  loader = true;
  location: Location;
  contexts: ChildrenOutletContexts;  
  messageService: MessageService;

  //Dùng injector để dùng super ở các components khác 
  constructor(injector: Injector)
  {
    this.location = injector.get(Location);
    this.contexts = injector.get(ChildrenOutletContexts);
    this.messageService = injector.get(MessageService);
  }

  getCurrentUrl(): string {
    let currentUrl = this.location.path();
    if (currentUrl === "/app/user" || currentUrl === "/app/user/create") {
      this.currentRoute = "Người dùng";
      return "Người dùng";
    } else if (currentUrl === '/app/teams') {
      this.currentRoute = "Nhóm";
      return "Nhóm";
    } else {
      this.currentRoute = "Home";
      return "Home";
    }
  }

  timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  showMessage(severityOfMessage: string, message: string) {
    this.messageService.add({ severity: severityOfMessage, summary: 'Message', detail: message })
  }
}
