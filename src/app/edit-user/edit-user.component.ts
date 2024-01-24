import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../serives/api-service.service';
import { SharedService } from '../serives/shared.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'], 
})
export class EditUserComponent implements OnInit {
  formData: any;

  onSaveData() {
    
  
    this.formData = this.saveData();
    // console.log(this.formData);
    this.sharedService.updateNewData(this.formData);
    
  }

  saveData(): any {
    return {
      id:this.sharedService.curretUser.id,
      FirstName: this.form.get('name')?.value,
      PhoneNumber: this.form.get('phoneNumber')?.value,
      Email: this.form.get('email')?.value,
      Vehicle: this.form.get('vehicle')?.value,
      JobTitle: this.form.get('jobTitle')?.value,
    };
  }


  autofillForm() {
    this.form.patchValue({
      name: this.sharedService.curretUser.FirstName,
      phoneNumber: this.sharedService.curretUser.PhoneNumber,
      email: this.sharedService.curretUser.Email,
      vehicle: this.sharedService.curretUser.Vehicle,
      jobTitle: this.sharedService.curretUser.JobTitle,
    });
  }

  form!: FormGroup;

  constructor(private fb: FormBuilder,public sharedService: SharedService,public _apiservice: ApiServiceService) {}
  ngOnInit() {
    // console.log(this.sharedService.curretUser);
    
    this.form = this.fb.group({
      name: [''],
      phoneNumber: [''],
      email: [''],
      vehicle: [''],
      jobTitle: [''],
    });
    this.autofillForm();
  }
}
