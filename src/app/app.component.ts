import { Component } from '@angular/core';
import { ApiServiceService } from './serives/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { SharedService } from './serives/shared.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  FormData: any;
  onSaveData: any;
  newData: any;

  totalItems = 100;
  itemsPerPage = 10;
  currentPage = 1;

  filteredData: any[] = [];
  searchQuery: string = '';
 

  constructor(public sharedService: SharedService, public _apiservice: ApiServiceService, private dialog: MatDialog) { }

  onDelete(data: any): void {
    Swal.fire({
      title: "Do you want to Delete This Data?",

      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {


        this.sharedService.deleteUser(data.id);
        Swal.fire("Deleted!");
      }
    });
  }

  showPopUp() {
    this.dialog.open(DialogComponent, {
      width: '60%',
      height: '550px'
    })

  }
  onEdit() {
    this.dialog.open(EditUserComponent, {
      width: '60%',
      height: '550px'
    })
  }

  ngOnInit() {
    this._apiservice.getdata().subscribe((res: any) => {

      this.sharedService.newData = res;
      // console.log(res);

    },
      (error) => {
        console.error('error is here', error);
      })
  }

  pageChanged(event: any): void {
    this.currentPage = event;
  }

  onSearch() {
    // debugger
    const query = this.searchQuery.toLowerCase();
  
    if (query.trim() === '') {
      // If the search query is empty, return the original data
      this.filteredData = this.sharedService.newData;
    } else {
      // Otherwise, filter the data based on the search query
      this.filteredData = this.sharedService.newData.filter(item => {
        const searchableFields = ["FirstName", 'PhoneNumber', 'Email', 'Vehicle', 'JobTitle'];
        return searchableFields.some(field => {
          const fieldValue = String(item[field]).toLowerCase();
          return fieldValue.includes(query);
        });
        
      });

      console.log('Filtered Data:', this.filteredData);
    }
  
  }
  
    
  }
  
