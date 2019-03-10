
import { BarChartComponent } from './../bar-chart/bar-chart.component';
import { PieChart } from './../pie-chart/pie-chart.component';
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
import { ListItemComponent } from '../list-item/list-item.component';
import { SearchItemsComponent } from '../search-items/search-items.component';
import { SearchUsersComponent } from './../search-users/search-users.component';
import { CreateItemComponent, CreateItemDialogComponent } from './../create-item/create-item.component';
import { UpdateItemComponent } from './../update-item/update-item.component';
import { ListMessagesComponent } from './../list-messages/list-messages.component'

import UserService from '../../services/user.service';


import {
  MatSidenavModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { CreateMessageComponent } from '../create-message/create-message.component';
import { CreateMessageDialogComponent } from '../create-message/create-message-dialog.component';

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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
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
    Home, 
    CreateItemComponent,
    CreateItemDialogComponent,
    UpdateItemComponent,
    ListItemComponent,
    SearchItemsComponent,
    SearchUsersComponent,
    PieChart,
    BarChartComponent,
    ListMessagesComponent,
    CreateMessageComponent,
    CreateMessageDialogComponent
  ],
  providers: [UserService],
  entryComponents: [
    EditUserDialogContent,
    RemoveUserDialogContent,
    CreateItemComponent,
    CreateItemDialogComponent,
    UpdateItemComponent,
    ListItemComponent,
    CreateMessageComponent,
    CreateMessageDialogComponent
  ],
  bootstrap: [Home]
})
export class HomeModule { }
