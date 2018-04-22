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
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AuthComponent } from './components/auth/auth.component';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuardService } from './services/auth-guard.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const appRoutes: Routes = [
  {
    path: 'log',
    component: LogComponent,
    data: {title: 'Log'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'new-update',
    component: UpdateFormComponent,
    data: {title: 'New Update'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    component: AuthComponent,
    data: {title: 'Authorization'}
  },
  {
    path: '',
    redirectTo: '/log',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    UpdateFormComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Picard'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
