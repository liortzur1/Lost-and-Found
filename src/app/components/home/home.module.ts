import { NgModule } from '@angular/core';
import { NavbarMenu } from '../navber/navbar.component';
import { MyActivity } from '../my-activity/my-activity.component';
import { Lost } from '../lost/lost.component';
import { Found } from '../found/found.component';
import { Admin, RemoveUserDialogContent } from '../admin/admin.component';
import { Stats } from '../stats/stats.component';
import { User, EditUserDialogContent } from '../user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home.component';
import UserService from '../../services/user.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { HttpModule } from '@angular/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AgmCoreModule } from '@agm/core';

@NgModule({
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
    MatCheckboxModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe2cx9NLqtDipMKZ1J2EeioMAn2W9L_20'
    })
  ],
  exports: [
  ],
  declarations: [
    NavbarMenu,
    MyActivity,
    Lost,
    Found,
    Admin,
    Stats,
    User, 
    EditUserDialogContent,
    RemoveUserDialogContent,
    Home
  ],
  providers: [UserService],
  entryComponents: [EditUserDialogContent, RemoveUserDialogContent],
  bootstrap: [Home]
})
export class HomeModule { }
