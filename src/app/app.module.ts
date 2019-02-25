import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import UserService from './services/user.service';

import { AppComponent } from './app.component';
import { NavbarMenu } from './components/navber/navbar.component';
import { MyActivity } from './components/my-activity/my-activity.component';
import { Lost } from './components/lost/lost.component';
import { Found } from './components/found/found.component';
import { Admin } from './components/admin/admin.component';
import { Stats } from './components/stats/stats.component';
import { User, DialogContent } from './components/user/user.component';

const appRoutes: Routes = [
  { path: 'my-activity', component: MyActivity },
  { path: 'lost', component: Lost },
  { path: 'found', component: Found },
  { path: 'admin', component: Admin },
  { path: 'stats', component: Stats },
  { path: 'user/:userDetails', component: User }
];

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenu,
    MyActivity,
    Lost,
    Found,
    Admin,
    Stats,
    User,
    DialogContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SocketIoModule.forRoot(config)
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [DialogContent]
})
export class AppModule { }
