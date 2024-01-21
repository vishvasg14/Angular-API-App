import { Component } from '@angular/core';
import { ApiServiceService } from './serives/api-service.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  newData: any;
  constructor(public _apiservice: ApiServiceService, public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(); 
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

