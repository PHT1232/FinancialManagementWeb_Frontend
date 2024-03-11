import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetGroupModel } from './models/group/GetGroupModel';
import { AddGroupModel } from './models/group/AddGroupModel';
import { Observable } from 'rxjs';

const groupServiceUrl = 'https://localhost:7279/api/group/';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroupById(): Observable<GetGroupModel> {
    let localUrl = groupServiceUrl + "GetGroupById";
    return this.http.get<GetGroupModel>(localUrl)
  }

  addGroup(group: AddGroupModel): Observable<any> {
    let localUrl = groupServiceUrl + "AddGroup";
    return this.http.post<AddGroupModel>(localUrl, group);
  }

  
}
