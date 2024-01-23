import { Component ,OnInit, } from '@angular/core';
import { SharedService } from '../serives/shared.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit{

  inputdata:any;
  constructor( public sharedService:SharedService , private ref:MatDialogRef<DialogComponent> ){}

  closePop(){
    this.ref.close();
  }

 


  ngOnInit(): void {
   
  }
 
}
