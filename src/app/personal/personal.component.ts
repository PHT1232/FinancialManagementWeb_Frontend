import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  tooltipItems!: MenuItem[];
  value = "";
  loading = false;

  ngOnInit(): void {
    this.tooltipItems = [
      {
          tooltipOptions: {
              tooltipLabel: 'Tạo'
          },
          icon: 'pi pi-pencil',
          command: () => {
          }
      },
      {
          tooltipOptions: {
              tooltipLabel: 'Tham gia'
          },
          icon: 'pi pi-users',
          command: () => {
          }
      },
    ];
}
}
