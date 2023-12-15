import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onHide(value: boolean) {
    this.visibleChange.emit(value);
  }
}
