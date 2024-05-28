import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppComponent } from '../app.component';
import { UserService } from 'src/services/UserService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  datas!: any[];
  items!: MenuItem[];

  selectedData!: any;

  isDialogVisible = false;

  constructor(private appMain: AppComponent
    , private userService: UserService
  ) {
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      },
      {
        label: 'Animation',
        icon: 'pi pi-refresh',
        command: () => {
          this.showAnimationTest();
        }
      }
    ];
    this.displayUser();
  }

  displayUser() {
    this.userService.getUserDisplay().subscribe({
      next: (users) => {
        this.datas = users;
      }
    });
  }

  showAnimationTest() {
    
  }

  openSaveModel() {
    this.isDialogVisible = true;
  }

  update() {
    this.appMain.showMessage('success', 'Data Updated');
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.appMain.showMessage('warn', 'Data Deleted');
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }

  isDialogVisibleChange(value: boolean) {
    this.isDialogVisible = value;
  }
}
