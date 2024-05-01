import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GroupService } from 'src/services/group.service';

@Component({
  selector: 'app-join-teams',
  templateUrl: './join-teams.component.html',
  styleUrls: ['./join-teams.component.css']
})
export class JoinTeamsComponent {
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
