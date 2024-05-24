import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/AuthenticationService';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public claims: any[] = [];

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
  }

}
