import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  isDialogVisible = false;

  ngOnInit(): void {
  }

  OpenCreateDialog() {
    console.log(this.isDialogVisible)
    this.isDialogVisible = true;
  }

  isDialogVisibleChange(value: boolean) {
    this.isDialogVisible = value;
  }
}
