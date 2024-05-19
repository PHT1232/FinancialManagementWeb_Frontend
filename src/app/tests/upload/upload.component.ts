import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserProfileModel } from 'src/services/models/uploadModel/UserProfileModel';
import { environment } from 'src/shared/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  files: File[] = [];
  filePath = ""
  imageSrc!: string | ArrayBuffer | null;
  user!: UserProfileModel;

  constructor(private http: HttpClient) {}

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

  upload() {
    var URL = environment.baseUrl + "/upload/UserProfileUpload"
    const formData = new FormData();
    for (var file of this.files) {
      formData.append('file', file);
      URL += "?id=phat";
    }
    this.http.post(URL, formData).subscribe((res) => {
        
    });    
  }
}
