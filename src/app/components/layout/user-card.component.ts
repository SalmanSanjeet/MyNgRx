import { Component, Input } from "@angular/core";
import { User } from "src/app/models/user";

@Component({
    selector:'youtube-user-card',
    templateUrl:'./user-card.component.html'
})
export class UserCardComponent{
    @Input() user: User;
}