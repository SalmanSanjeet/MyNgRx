import { Component, Input } from "@angular/core";
import { User } from "../models/user";

@Component({
    selector:'youtube-user-list',
    templateUrl:'./user-list.component.html'
})
export class UserListComponent{
    @Input() users: User[];

}