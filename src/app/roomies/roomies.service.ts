import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Users } from "../shared/users.interface";


@Injectable()
export class RoomiesService {

  constructor(private _http : HttpClient) { }

  getRoomies() : Observable<any> {
    return this._http.get("/api/users");
  }

}