import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { YoutubeLayoutComponent } from './components/layout/youtube-layout/youtube-layout.component';


import { UserComponent } from './containers/user/user.component';
import { PostComponent } from './containers/post/post.component';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { UserCardComponent } from './components/layout/user-card.component';
import { UserListComponent } from './components/user-list.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubeLayoutComponent,
    UserComponent,
    PostComponent, UserCardComponent, UserListComponent
  ],
  imports: [
    BrowserModule,FlexLayoutModule,HttpClientModule, FlexModule, AppRoutingModule, MaterialModule,  BrowserAnimationsModule, StoreModule.forRoot({}, {})
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
