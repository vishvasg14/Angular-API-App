import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) { }

  getdata(){
    return this._http.get('https://apigenerator.dronahq.com/api/b5vFhWlm/UserData');
  }
  
  
}
