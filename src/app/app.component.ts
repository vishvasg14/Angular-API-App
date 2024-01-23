import { Component } from '@angular/core';
import { ApiServiceService } from './serives/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { SharedService } from './serives/shared.service';
import { EditUserComponent } from './edit-user/edit-user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
FormData: any;

constructor(public sharedService: SharedService, public _apiservice: ApiServiceService, private dialog: MatDialog) { }
  
  onDelete(item:any){

  }

  showPopUp() {
    this.dialog.open(DialogComponent, {
      width: '60%',
      height: '400px'
    })

  }
  onEdit(){
    this.dialog.open(EditUserComponent, {
      width: '60%',
      height: '400px'
    })
  }

  ngOnInit() {
    this._apiservice.getdata().subscribe((res: any) => {

      this.sharedService.newData = res;
      console.log(res);
      
    },
      (error) => {
        console.error('error is here', error);
      })
  }
}

