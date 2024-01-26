import { Component ,OnInit } from '@angular/core';
import { SharedService } from '../serives/shared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit{
  form!: FormGroup;
  getvalues:any;
  inputdata:any;
formSubmitted: any;
  constructor(private toastr: ToastrService,private fb: FormBuilder, public sharedService:SharedService , private ref:MatDialogRef<DialogComponent> ){}

  closePop(){
    this.ref.close();
  }

  submitForm(): any {
    if (this.form.valid) {
        this.getvalues = this.form.value;

        let jsonData = {
            "FirstName": this.getvalues.name,
            "PhoneNumber": this.getvalues.phoneNumber,
            "Email": this.getvalues.email,
            "Vehicle": this.getvalues.vehicle,
            "JobTitle": this.getvalues.jobTitle,
            "id": this.sharedService.newData.length + 1
        };

        this.sharedService.newData.push(jsonData);

        const successMessage = 'Form submitted successfully!';
        this.toastr.success(successMessage, 'Success');
    } else {
        const errorMessage = 'Please fill out all required fields correctly before submitting the form.';
        this.toastr.error(errorMessage, 'Error');
    }
}



  ngOnInit(): void {

      this.form = this.fb.group({
        name: ['', [Validators.maxLength(255), Validators.minLength(2)]],
        phoneNumber: ['', Validators.pattern(/^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})([\s.-]?\d{1,10}){1,5}$/)],
        email: ['', Validators.email],
        vehicle: ['',[Validators.maxLength(255), Validators.minLength(2)]],
        jobTitle: ['',[Validators.maxLength(255), Validators.minLength(2)]],
      });
  }
  isFormValid(): boolean {
    return this.form.valid;
  }
 
}
