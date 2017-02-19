import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { UserPage } from '../pages/user/user';
import { ForumHomePage } from '../pages/forum/forum-home';

import { HeaderComponent } from './../components/header/header';
import { ViewComponent } from '../components/view/view';
import { BackendAngularApiModule } from '../api/backend-angular-api/backend-angular-api.module';
import { NoticeModalContent } from '../components/modals/notice/notice';

const appRoutes: Routes = [
  { path: 'user', component: UserPage },
  { path: 'forum-home', component: ForumHomePage },
  { path: 'home', component: HomePage },
  { path: 'help', component: HelpPage },
  { path: '', component: UserPage }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HelpPage,
    ForumHomePage,
    UserPage,
    NoticeModalContent,
    HeaderComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BackendAngularApiModule,
    RouterModule.forRoot( appRoutes, { useHash: !history.pushState }),
    NgbModule.forRoot()
  ],
  bootstrap: [ AppComponent ],
  providers: [ NgbActiveModal ],
  entryComponents: [ NoticeModalContent ]
})
export class AppModule {}


