import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  userSeleted:string = "this is for child from parent!!!";

  @ViewChild('searchInput') searchInput!: ElementRef;

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
    if (this.value !== '') {
      this.loading = true;
      this.userService.searchUsers(this.value).subscribe({
        next: (data) => {
          console.log(data);
          this.users = data;          
          this.loading = false;
        }
      })
      await delay(100);
      this.searchInput.nativeElement.focus();   
    } 
  }
  
  clickUser(userId: string) {
    console.log(userId);
  }
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}