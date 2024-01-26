import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../serives/api-service.service';
import { SharedService } from '../serives/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'], 
})
export class EditUserComponent implements OnInit {
  
  constructor(private toastr: ToastrService,private fb: FormBuilder,public sharedService: SharedService,public _apiservice: ApiServiceService) {}
  formData: any;
  formSubmitted: any;

  onSaveData() {
    try {
        this.formData = this.saveData();

        if (this.formData) {
            this.sharedService.updateNewData(this.formData);

            const successMessage = `Data saved successfully!`;

            this.toastr.success(successMessage);
        } else {
            const errorMessage = `Error saving data. Please check your input and try again.`;

            this.toastr.error(errorMessage);
        }
    } catch (error) {
        const errorMessage = `An unexpected error occurred while saving data. Please try again later.`;

        this.toastr.error(errorMessage);
        console.error(error); // Log the error for debugging purposes
    }
}


  saveData(): any {
    
    if (this.form.valid) {
    return {
      id:this.sharedService.curretUser.id,
      FirstName: this.form.get('name')?.value,
      PhoneNumber: this.form.get('phoneNumber')?.value,
      Email: this.form.get('email')?.value,
      Vehicle: this.form.get('vehicle')?.value,
      JobTitle: this.form.get('jobTitle')?.value,
      
    }
  }
  
  }


  autofillForm() {
    // console.log(this.sharedService.curretUser.id);
    
    this.form.patchValue({
      name: this.sharedService.curretUser.FirstName,
      phoneNumber: this.sharedService.curretUser.PhoneNumber,
      email: this.sharedService.curretUser.Email,
      vehicle: this.sharedService.curretUser.Vehicle,
      jobTitle: this.sharedService.curretUser.JobTitle,
    });
  }

  form!: FormGroup;

  ngOnInit() {
    // console.log(this.sharedService.curretUser);
    
    this.form = this.fb.group({ 
      name: ['', [Validators.maxLength(255), Validators.minLength(2)]],
      phoneNumber: ['', Validators.pattern(/^[0-9]{10}$/)],
      email: ['', Validators.email],
      vehicle: ['',[Validators.maxLength(255), Validators.minLength(2)]],
      jobTitle: ['',[Validators.maxLength(255), Validators.minLength(2)]],
    });
    this.autofillForm();
  }
}
