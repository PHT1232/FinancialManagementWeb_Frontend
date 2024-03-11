import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GroupService } from 'src/services/group.service';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})
export class CreateTeamsComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  checked = true;

  onHide(value: boolean) {
    this.visibleChange.emit(value);
  }

  constructor(private group: GroupService) {}

  addGroup() {
    
  }
}
