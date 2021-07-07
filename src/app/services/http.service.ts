import { HttpClient } from '@angular/common/http'
import {  Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable()
export class HttpService{
   private baseUrl = 'https://jsonplaceholder.typicode.com'

    constructor(private http: HttpClient ) {
    }

    get(url:string, params?:any): Observable<any>{
        const data ={params};
        return this.http.get(this.baseUrl + url, data)
        .pipe(catchError(this.errorHandler.bind(this))); 
    }

    private errorHandler(response:any){
        const error = response.error;
        const keys = Object.keys(error);
        const key = keys[0];
        let message = error[key];
        if (response.status === 401){
            // auth Token delete
            //redirect login page
        }
        if(error[key] instanceof Array){
            message = error[key][0];
        }  
        if(key === 'isTrusted'){
            // this will occur when not connected to internet
        }
        else{
            message = key+ ' : '+message;
        }

        // call snackbar show error with message
        return throwError({messages: message, error});
    }
}