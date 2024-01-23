import { Component ,OnInit } from '@angular/core';
import { SharedService } from '../serives/shared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit{
  form!: FormGroup;
  getvalues:any;
  inputdata:any;
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
        name: [''],
        phoneNumber: [''],
        email: [''],
        vehicle: [''],
        jobTitle: [''],
      });
  }
 
}
