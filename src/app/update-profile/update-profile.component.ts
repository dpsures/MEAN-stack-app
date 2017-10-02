import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MD_DIALOG_DATA } from "@angular/material";

import { RoomiesService } from "../roomies/roomies.service";
import { Users } from "../shared/users.interface";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  _id : string;

  constructor(public dialog: MatDialogRef<UpdateProfileComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, public _roomies_service: RoomiesService) {
    this.firstName = data.userDetails.firstName;
    this.lastName = data.userDetails.lastName;
    this.mobile = data.userDetails.mobile;
    this.email = data.userDetails.email;
    this._id = data.userDetails._id;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialog.close();
  }

  update() {
    let user = {
      firstName : this.firstName,
      lastName : this.lastName,
      mobile : this.mobile,
      email : this.email,
      _id : this._id
    };

    this._roomies_service.doUpdate(user as Users);
  }
}
