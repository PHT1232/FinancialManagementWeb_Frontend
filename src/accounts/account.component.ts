import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router, RouterLink, RouterOutlet, Routes, UrlSegment } from '@angular/router';
import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';
import {Location} from '@angular/common';
  
  @Component({
    selector: 'account-root',
    templateUrl: './account.component.html',
  })
  export class AccountComponent {
    title = 'Login';
    currentRoute!: string;
  
    constructor(public location: Location, private contexts: ChildrenOutletContexts)
    {
    }
  }
  