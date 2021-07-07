import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user";
import { HttpService } from "./http.service";

@Injectable()
export class ApiService{
 
    constructor(private httpservice: HttpService) {
        
    }

    getAllPost():Observable<User[]>{
      return  this.httpservice.get('/users')
        .pipe(map(data=> data as User[]))
    }
}