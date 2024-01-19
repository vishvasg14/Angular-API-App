import { Component } from '@angular/core';
import { ApiServiceService } from './serives/api-service.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userData = { id: 1, name: 'John Doe', email: 'john@example.com' };

  newData: any;
  constructor(public _apiservice: ApiServiceService, public dialog: MatDialog) { }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { ...this.userData } // Pass user data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle changes after the dialog is closed
        console.log('Dialog closed with result:', result);
        // Update the user data or perform other actions based on the result
      }
    });
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

