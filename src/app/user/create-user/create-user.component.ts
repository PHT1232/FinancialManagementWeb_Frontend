import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/services/AuthenticationService';
import { ApplicationUser } from 'src/services/models/authModel/ApplicationUser';
import { UploadService } from 'src/services/UploadService';
import { UserService } from 'src/services/UserService';
import { environment } from 'src/shared/environment';

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
  file!: File;
  filePath = ""
  imageSrc!: string | ArrayBuffer | null;

  checked = true;

  constructor(private authenService: AuthenticationService
    , private appMain: AppComponent
    , private http: HttpClient
    , private uploadService: UploadService
    , private userService: UserService) {

  }

  onHide(value: boolean) {
    this.visibleChange.emit(value);
  }

  isFormValid() {
    if (this.user === undefined) {
      return false;
    }

    if (this.user.email === undefined || this.user.email === '') {
      return false;
    }

    if (this.user.username === undefined || this.user.username === '') {
      return false;
    }

    if (this.user.password === undefined || this.user.password === '') {
      return false;
    }
    
    return true;
  }

  register() {
    let reader = new FileReader();

    this.userService.register(this.user.email, this.user.username, this.user.password).subscribe({
      next: () => {
        this.appMain.showMessage('success', 'Tạo người dùng thành công');
        this.visible = false;
      },
      error: (errorRes) => {
        var jsonError = JSON.parse(errorRes.error);
        this.appMain.showMessage('error', jsonError.title);
      }
    });
  }

  registerWithFile() {
    this.userService.register(this.user.email, this.user.username, this.user.password).subscribe({
      next: () => {
        debugger;
        this.appMain.showMessage('success', 'Tạo người dùng thành công');
        this.uploadService.UserProfileUpload(this.file, this.user.username).subscribe({
          next: () => {
            this.appMain.showMessage('success', 'Tạo ảnh đại diện thành công')
          }, 
          error: () => {
            this.appMain.showMessage('error', 'Lỗi file không hợp lệ')
          }
        });
        
        this.visible = false;
      },
      error: (errorRes) => {        
        var jsonError = JSON.parse(errorRes.error);
        this.appMain.showMessage('error', jsonError.title);
      }
    });
  }

  onSelect(event: any) {
    if (this.files.length > 0) {
      this.files.splice(0, 1);
    }
    this.files.push(...event.addedFiles);

    this.file = this.files[0];
    const reader = new FileReader();
    
    reader.onload = e => this.imageSrc = reader.result;

    reader.readAsDataURL(this.file);
  }

  onRemove(event: any) {
    console.log(this.files.indexOf(event));
    this.files.splice(this.files.indexOf(event), 1);
  }
}