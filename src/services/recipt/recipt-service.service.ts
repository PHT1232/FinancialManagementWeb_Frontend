import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReciptServiceService {

  constructor(private httpClient: HttpClient,
            private httpHeaders: HttpHeaders) { }
  
}
