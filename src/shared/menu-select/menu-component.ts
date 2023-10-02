import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './menu-component.html',
  styleUrls: ['./menu-component.css']
})
export class MenuComponent {
  @Input() tag!: tagCategory[];
  @Input() cancelDisabled!: boolean;
  @Input() saveLabel = 'Lưu';
  @Input() saveDisabled!: boolean;

  @Output() onCancelClick = new EventEmitter<number>();

}
