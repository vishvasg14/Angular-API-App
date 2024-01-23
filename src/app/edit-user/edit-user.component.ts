import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../serives/api-service.service';
import { SharedService } from '../serives/shared.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  form!: FormGroup<any>;
  
  constructor(private fb: FormBuilder,public sharedService: SharedService, public _apiservice: ApiServiceService){}
  submitForm():any{
    
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      phoneNumber: [''],
      email: [''],
      vehicle: [''],
      jobTitle: [''],
    });
    this.autofillForm();
    this._apiservice.getdata().subscribe((res: any) => {

      this.sharedService.newData = res;
      console.log(res);
      
    },
      (error) => {
        console.error('error is here', error);
      })
  }

  autofillForm(){
    
    // name:
    // phoneNumber:
    // email:
    // vehicle:
    // jobTitle:
  }

}
