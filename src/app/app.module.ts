import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {MessagesComponent} from './messages.component';
import {webService} from "./web.service";
import {HttpModule} from "@angular/http";
import {NewMessageComponent} from "./new-message.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavComponent} from "./nav.component";
import {HomeComponent} from "./home.component";
import {RegisterComponent} from "./register.component";

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'messages/:name',
    component: MessagesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [webService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
