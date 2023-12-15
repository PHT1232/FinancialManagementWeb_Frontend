import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})
export class CreateTeamsComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onHide(value: boolean) {
    this.visibleChange.emit(value);
  }
}
