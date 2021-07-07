import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { DashboardComponent } from "./components/layout/dashboard/dashboard.component";
import { PostComponent } from "./containers/post/post.component";
import { UserComponent } from "./containers/user/user.component";

const routes: Routes =[{
    path: '', component: DashboardComponent,
    children: [
        {path: '', component: UserComponent},
        {path: 'post', component:PostComponent}
    ]
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}