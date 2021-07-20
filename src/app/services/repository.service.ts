import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, Observable, ObservedValueOf } from "rxjs";
import { take } from "rxjs/operators";
import { UserListErrorAction, UserListRequestAction, UserListSuccessAction } from "../actions/user-action";
import { User } from "../models/user";
import { getUserLoaded, getUserLoading, getUsers, getUsersError, RootReducerState } from "../reducers";
import { ApiService } from "./api.service";

@Injectable()
export class RepositoryService{
    
    constructor(private apiService: ApiService, private store: Store<RootReducerState>) {}

    getUserList(force = false):[Observable<boolean>, Observable<User[]>, Observable<boolean>]{
        const loading$ = this.store.select(getUserLoading);
        const loaded$ = this.store.select(getUserLoaded);        
        const getUserData = this.store.select(getUsers);
        const getUserError =  this.store.select(getUsersError);
        combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data)=>{
            if(!data[0] && !data[1] || force){
                this.store.dispatch(new UserListRequestAction())
                this.apiService.getAllPost().subscribe(data => {             
                   // setTimeout(()=>{}, 3000)
                    this.store.dispatch(new UserListSuccessAction({data}))
               },error=>{
                   this.store.dispatch(new UserListErrorAction());
               });
            }
        });
        return [loading$ ,getUserData,getUserError];
    }
}