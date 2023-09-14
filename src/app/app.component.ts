import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Routes, UrlSegment } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: string[] = [];
  opened: boolean = true;
  title = 'FinancialManagementWeb_Frontend';
  currentRoute!: string;

  constructor(public location: Location)
  {
  }

  getCurrentUrl(): string {
    let currentUrl = this.location.path();
    if (currentUrl === "/receipt") {
      this.currentRoute = "Hóa đơn";
      return "Hóa đơn";
    } else {
      this.currentRoute = "Home";
      return "Home";
    }
  }
}
