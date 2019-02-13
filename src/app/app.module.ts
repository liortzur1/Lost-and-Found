import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import UserService from './services/user.service';

import { AppComponent } from './app.component';
import { NavbarMenu } from './components/navber/navbar.component';
import { MyActivity } from './components/my-activity/my-activity.component';
import { Lost } from './components/lost/lost.component';
import { Found } from './components/found/found.component';
import { Admin } from './components/admin/admin.component';
import { Stats } from './components/stats/stats.component';
import { CreateItemComponent } from './components/Create-Item/create-item.component';;

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
    CreateItemComponent
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
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
