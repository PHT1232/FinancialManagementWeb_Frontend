import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpError } from '@microsoft/signalr';
import { AuthenticationService } from 'src/services/AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrUsername!: string;
  password!: string;
  errorMessage: string = '';
  showError: boolean = false;
  loading: boolean = false;


  constructor(private route: Router, private authenService: AuthenticationService) {}

  loginFn() {
    this.loading = true;
    this.authenService.login(this.emailOrUsername, this.password).subscribe({
      next: (user) => { 
        this.loading = false;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.token);
        this.route.navigate(['app/teams']);       
      },
      error: (errorRes) => {
        if (!(errorRes instanceof HttpErrorResponse)) {
          console.error('Lỗi khi kết nối đến sever ', errorRes);
        }

        if (errorRes.error.type === 'https://tools.ietf.org/html/rfc7231#section-6.6.1') {
          this.errorMessage = errorRes.error.title;
        }
        this.loading = false;
        this.showError = true;
      }
    })
  }

  checkFormValid() {
    if (this.emailOrUsername === undefined || this.emailOrUsername === '') {
      this.errorMessage = 'Xin hãy nhập đủ trường'
      return true;
    } 

    if (this.password === undefined || this.password === '') {
      this.errorMessage = 'Xin hãy nhập đủ trường'
      return true;
    }

    return false;
  }
}
