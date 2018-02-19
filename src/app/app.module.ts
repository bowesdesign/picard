// angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


// external libraries
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// internal imports
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LogComponent } from './components/log/log.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
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
