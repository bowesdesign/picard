import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  private password = '';
  public errorMessage: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  onLoginClicked() {
    this.clearErrorMessage();

    this.authenticationService.authenticate(this.password).then(
      () => {this.router.navigateByUrl('/log'); },
      () => {
        this.errorMessage = 'Invalid password, access denied!';
      });
  }

  onPasswordKey(event: any) {
    this.password = event.target.value;
  }

  private clearErrorMessage() {
    this.errorMessage = '';
  }
}
