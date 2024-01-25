import { Component ,OnInit } from '@angular/core';
import { SharedService } from '../serives/shared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
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
  constructor(private fb: FormBuilder, public sharedService:SharedService , private ref:MatDialogRef<DialogComponent> ){}

  closePop(){
    this.ref.close();
  }

  submitForm(): any {
    if (this.form.valid) {
      this.getvalues=this.form.value;
      // console.log(this.getvalues);
      let jsonData={
        "FirstName": this.getvalues.name,
        "PhoneNumber": this.getvalues.phoneNumber,
        "Email": this.getvalues.email,
        "Vehicle": this.getvalues.vehicle,
        "JobTitle": this.getvalues.jobTitle,
        "id": this.sharedService.newData.length+1
    }
      
    this.sharedService.newData.push(jsonData)
      
    }
  }
 


  ngOnInit(): void {

      this.form = this.fb.group({
        name: ['', [Validators.maxLength(25), Validators.minLength(2)]],
        phoneNumber: ['', Validators.pattern(/^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})([\s.-]?\d{1,10}){1,5}$/)],
        email: ['', Validators.email],
        vehicle: ['',[Validators.maxLength(25), Validators.minLength(2)]],
        jobTitle: ['',[Validators.maxLength(25), Validators.minLength(2)]],
      });
  }
  isFormValid(): boolean {
    return this.form.valid;
  }
 
}
