import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { UserListRequestAction, UserListSuccessAction } from "../../actions/user-action";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api.service";
import { getUserLoaded, getUserLoading, getUsers, RootReducerState } from "../../reducers";

@Component({
    selector: 'youtube-users',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
    
    constructor(private apiService: ApiService, private store: Store<RootReducerState>) {       
    }
    users: User[] =[];
    ngOnInit(){
    this.fetchData();
    }

    fetchData(){

        const loading$ = this.store.select(getUserLoading);
        const loaded$ = this.store.select(getUserLoaded);        
        const getUserData = this.store.select(getUsers);
        
        combineLatest([loaded$, loading$]).subscribe((data)=>{
            if(!data[0] && !data[1]){
                this.store.dispatch(new UserListRequestAction())
                this.apiService.getAllPost().subscribe(data => {             
                    this.store.dispatch(new UserListSuccessAction({data}))
               });
            }
        });
        
         this.store.select(getUsers).subscribe((data)=>{
             this.users = data;
         })
    }
}