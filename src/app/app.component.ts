import { Component } from '@angular/core';
import { ApiServiceService } from './serives/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { SharedService } from './serives/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  newData: any;
  constructor(public sharedService:SharedService,public _apiservice: ApiServiceService, private dialog:MatDialog) { }

  showPopUp(){
    this.dialog.open(DialogComponent,{
        width:'60%',
        height:'400px'
      })
    
  } 
  

  ngOnInit() {
    this._apiservice.getdata().subscribe((res: any) => {

      this.newData = res;
    },
      (error) => {
        console.error('error is here', error);
      })
  }
}

