import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  firstName : string;
  lastName : string;
  mobile : string;
  email : string;

  constructor(public dialog : MatDialogRef<UpdateProfileComponent>,
  @Inject(MD_DIALOG_DATA) public data : any) { 
    this.firstName = data.userDetails.firstName;
    this.lastName = data.userDetails.lastName;
    this.mobile = data.userDetails.mobile;
    this.email = data.userDetails.email;
  }

  ngOnInit() {
  }

  closeDialog(){
    this.dialog.close();
  }
}
