import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/services/AuthenticationService';
import { ApplicationUser } from 'src/services/models/authModel/ApplicationUser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  user: ApplicationUser = new ApplicationUser();
  files: File[] = [];
  filePath = ""
  imageSrc!: string | ArrayBuffer | null;

  checked = true;

  constructor(private authenService: AuthenticationService, private appMain: AppComponent) {

  }

  onHide(value: boolean) {
    this.visibleChange.emit(value);
  }

  isFromValid() {
    if (this.user === undefined) {
      return false;
    }

    if (this.user.userName === undefined || this.user.userName === '') {
      return false;
    }

    if (this.user.password === undefined || this.user.password === '') {
      return false;
    }
    
    return true;
  }

  register() {
    this.authenService.register(this.user.userName, this.user.password)
    this.appMain.showMessage('success', 'Tạo người dùng thành công');
    this.visible = false;
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
