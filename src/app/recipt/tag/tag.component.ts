import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onHide(value: boolean) {
    this.visibleChange.emit(value);
  }
}
