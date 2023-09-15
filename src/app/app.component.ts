import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router, RouterLink, RouterOutlet, Routes, UrlSegment } from '@angular/router';
import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';
import {Location} from '@angular/common';

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
  
  constructor(public location: Location, private contexts: ChildrenOutletContexts)
  {
  }

  getCurrentUrl(): string {
    let currentUrl = this.location.path();
    if (currentUrl === "/receipt" || currentUrl === "/receipt/create") {
      this.currentRoute = "Hóa đơn";
      return "Hóa đơn";
    } else {
      this.currentRoute = "Home";
      return "Home";
    }
  }

}
