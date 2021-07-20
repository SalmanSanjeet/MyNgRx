import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { UserListRequestAction, UserListSuccessAction } from "../../actions/user-action";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api.service";
import { getUserLoaded, getUserLoading, getUsers, RootReducerState } from "../../reducers";
import { RepositoryService } from "src/app/services/repository.service";

@Component({
    selector: 'youtube-users',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
    
    constructor(private repoServive : RepositoryService) {       
    }
    users: User[] =[];
    loading = false;
    error = false;
    ngOnInit(){
    this.fetchData();
    }

    fetchData(){
        const observer = this.repoServive.getUserList();
        const userData$ = observer[1];
        const loading$ = observer[0];
        const error$ = observer[2];

        userData$.subscribe(data=> this.users =data);
        loading$.subscribe(data=> this.loading =data);
        error$.subscribe(data=> this.error =data);
    }
    tryAgain(){
        this.repoServive.getUserList(true);
    }
}