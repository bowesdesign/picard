import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth) { }

  authenticate(password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(environment.primaryUser, password);
  }

  logout(): Promise <any> {
    return this.afAuth.auth.signOut();
  }

}
