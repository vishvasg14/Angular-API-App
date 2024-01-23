import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public onClickPopup:string=''
  public newData:any[]=[]
  constructor() { }
}
