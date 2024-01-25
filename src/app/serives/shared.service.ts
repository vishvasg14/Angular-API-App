import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  deleteUser(userId: number): void {
    const indexToDelete = this.newData.findIndex(user => user.id === userId);

    if (indexToDelete !== -1) {
      this.newData.splice(indexToDelete, 1);
    } else {
      console.error('User not found in the shared data array');
    }
  }

  public onClickPopup:string=''
  public newData:any[]=[];
  public curretUser:any;
  public formSubmitted:boolean=false;  
  
  
  updateNewData(updatedData: any) {
    // console.log(this.newData);
    
    const indexToUpdate = this.newData.findIndex(user => user.id === updatedData.id);

    if (indexToUpdate !== -1) {
      this.newData[indexToUpdate] = updatedData;
    } else {
      
      console.error('User not found in the shared data array');
      // console.log(indexToUpdate);
      
    }

    
  }
  constructor() { }


  
}
