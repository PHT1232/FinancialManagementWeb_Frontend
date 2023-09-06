import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.component.html',
  styleUrls: ['./recipt.component.css']
})
export class ReciptComponent extends AppComponent {
  keyword: string = "";
  totalItems: number = 10;
  first: number = 0;
  rows: number = 6;
  bsInlineRangeValue!: Date[];
}
