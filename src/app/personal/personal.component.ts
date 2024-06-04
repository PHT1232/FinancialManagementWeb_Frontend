import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { UserDisplay } from 'src/services/models/Users/UserDisplay';
import { UserService } from 'src/services/UserService';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  tooltipItems!: MenuItem[];
  loading = false;
  users: UserDisplay[] = [];

  value: string = '';

  constructor(private userService: UserService) {}

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

  async change(event: Event) {
    this.loading = true;
    if (this.value !== '') {
      this.userService.searchUsers(this.value).subscribe({
        next: (data) => {
          console.log(data);
        }
      })   
    }
  }
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}