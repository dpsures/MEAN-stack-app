import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Users } from "../shared/users.interface";


@Injectable()
export class RoomiesService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<any> {
    return this._http.get("/api/users");
  }

  doUpdate(user : Users){
    console.log("updated value --->"+user.firstName);
  }

  update(user : Users){
    return this._http.put("/api/users/"+user._id,user);
  }

  delete(user : Users){
    return this._http.delete("/api/users"+user._id);
  }

  create(user : Users){
    return this._http.post("/api/users/register",user);
  }
}