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
  files: File[] = [];
  filePath = ""
  imageSrc!: string | ArrayBuffer | null;

  onHide(value: boolean) {
    this.visibleChange.emit(value);
  }

  constructor(private group: GroupService) {}

  addGroup() {
    
  }
 
  onSelect(event: any) {
    if (this.files.length > 0) {
      console.log('files');
      this.files.splice(0, 1);
    }
    this.files.push(...event.addedFiles);

    const file = this.files[0];
    const reader = new FileReader();
    
    reader.onload = e => this.imageSrc = reader.result;

    reader.readAsDataURL(file);
  }

  onRemove(event: any) {
    console.log(this.files.indexOf(event));
    this.files.splice(this.files.indexOf(event), 1);
  }

}
