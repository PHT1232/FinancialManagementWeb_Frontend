import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/shared/environment";

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(private http: HttpClient) {
    }

    UserProfileUpload(file: File, username: string) {
        var URL = environment.baseUrl + "/upload/UserProfileUpload?username=" +  username;
        const formData = new FormData();
        formData.append('file', file);

        let options: any = {
            observe: "response",
            responseType: "text",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                Accept: "text/plain",
            }),
        }

        return this.http.post(URL, formData);
    }
}