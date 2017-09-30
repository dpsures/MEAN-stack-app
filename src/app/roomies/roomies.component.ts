import { Component, OnInit } from '@angular/core';
import { RoomiesService } from "./roomies.service";
import { Users } from "../shared/users.interface";

@Component({
  selector: 'app-roomies',
  templateUrl: './roomies.component.html',
  styleUrls: ['./roomies.component.css']
})
export class RoomiesComponent implements OnInit {

  allRoomies : Users[];

  constructor(private _room_service : RoomiesService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._room_service.getRoomies()
    .subscribe(data => {
        this.allRoomies = data.data;
    });
  }
}
