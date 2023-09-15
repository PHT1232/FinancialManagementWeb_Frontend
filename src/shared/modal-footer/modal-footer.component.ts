import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.css']
})
export class ModalFooterComponent {
  @Input() cancelLabel = 'Hủy';
  @Input() cancelDisabled!: boolean;
  @Input() saveLabel = 'Lưu';
  @Input() saveDisabled!: boolean;

  @Output() onCancelClick = new EventEmitter<number>();

}
