import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { HttpModule } from '@angular/http';

import { Globals } from './components/utils/Globals';
import { RoutingModule } from './app.routing';
import UserService from './services/user.service';

import { AppComponent } from './app.component';
import { User, EditUserDialogContent } from './components/user/user.component';
import { Login } from './components/login/login.component';
import { Home } from './components/home/home.component';
import { SignUp } from './components/sign-up/sign-up.component';
import { NeedAuthGuard} from './components/utils/NeedAuthGuard';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    SignUp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpModule,
    RoutingModule,
    HomeModule
  ],
  providers: [UserService, NeedAuthGuard, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
