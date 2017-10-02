import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";

import { RoomiesService } from "./roomies.service";
import { Users } from "../shared/users.interface";
import { UpdateProfileComponent } from "../update-profile/update-profile.component";

@Component({
  selector: 'app-roomies',
  templateUrl: './roomies.component.html',
  styleUrls: ['./roomies.component.css']
})
export class RoomiesComponent implements OnInit {

  allRoomies : Users[];

  constructor(private _room_service : RoomiesService,public dialog : MatDialog) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._room_service.getRoomies()
    .subscribe(data => {
        this.allRoomies = data.data;
    });
  }

  openProfileDialog(user){
    let dialogComp = this.dialog.open(UpdateProfileComponent, {
      width: '300px', height: '500px',
      data : {userDetails : user}
    });

    dialogComp.afterClosed().subscribe(result => {
      console.log("profile dialog is closed");
    });
  }
}
