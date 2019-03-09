import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import UserService from './services/user.service';
import { FormsModule }   from '@angular/forms';
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
  MatGridListModule,
  MatIconModule
  

} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarMenu } from './components/navber/navbar.component';
import { MyActivity } from './components/my-activity/my-activity.component';
import { Lost } from './components/lost/lost.component';
import { Found } from './components/found/found.component';
import { Admin } from './components/admin/admin.component';
import { Stats } from './components/stats/stats.component';
import { CreateItemComponent, CreateItemDialogComponent } from './components/Create-Item/create-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';;

const appRoutes: Routes = [
  { path: 'my-activity', component: MyActivity },
  { path: 'lost', component: Lost },
  { path: 'found', component: Found },
  { path: 'admin', component: Admin },
  { path: 'stats', component: Stats }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenu,
    MyActivity,
    Lost,
    Found,
    Admin,
    Stats,
    CreateItemComponent,
    CreateItemDialogComponent,
    ListItemComponent,
    SearchItemsComponent,
    UpdateItemComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
    MatIconModule
    
  ],
  entryComponents: [CreateItemComponent, CreateItemDialogComponent, UpdateItemComponent, ListItemComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
