import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'youtube-users',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
    
    constructor(private apiService: ApiService) {       
    }
    users: User[] =[];
    ngOnInit(){
    this.fetchData();
    }

    fetchData(){
         this.apiService.getAllPost().subscribe(data => {
             this.users =data;
            console.log(data);
        });
         
    }
}