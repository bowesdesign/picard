import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth) { }

  authenticate(password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(environment.primaryUser, password);
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  getAuthState(): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .map(authState => !!authState);
  }
}
