import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { appModuleAnimation } from 'src/shared/animations/routerTransitions';

@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.component.html',
  styleUrls: ['./recipt.component.css'],
  animations: [ appModuleAnimation() ]
})
export class ReciptComponent extends AppComponent implements OnInit {
  keyword: string = "";
  totalItems: number = 10;
  first: number = 0;
  rows: number = 6;
  bsInlineRangeValue!: Date[];
  
  ngOnInit(): void {
    // this.changeRoute();
    this.currentRoute = "Hóa đơn";
  }


}
