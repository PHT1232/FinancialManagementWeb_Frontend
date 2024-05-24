import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  isCreateDialogVisible = false;
  isJoinDialogVisible = false;
  
  tooltipItems!: MenuItem[];

  ngOnInit(): void {
      this.tooltipItems = [
        {
            tooltipOptions: {
                tooltipLabel: 'Tạo'
            },
            icon: 'pi pi-pencil',
            command: () => {
              this.OpenCreateDialog();
            }
        },
        {
            tooltipOptions: {
                tooltipLabel: 'Tham gia'
            },
            icon: 'pi pi-users',
            command: () => {
              this.OpenJoinDialog();
            }
        },
      ];
  }

  OpenCreateDialog() {
    if (!this.isJoinDialogVisible) {
      this.isCreateDialogVisible = true;
    }
  }

  OpenJoinDialog() {
    if (!this.isCreateDialogVisible) {
      this.isJoinDialogVisible = true;
    }
  }

  isCreateDialogVisibleChange(value: boolean) {
    this.isCreateDialogVisible = value;
  }

  isJoinDialogVisibleChange(value: boolean) {
    this.isJoinDialogVisible = value;
  }
}
