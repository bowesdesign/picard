import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LogComponent } from './components/log/log.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'log',
    component: LogComponent,
    data: {title: 'Log'}
  },
  {
    path: 'new-update',
    component: UpdateFormComponent,
    data: {title: 'New Update'}
  },
  {
    path: '',
    redirectTo: '/log',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Picard'),
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
