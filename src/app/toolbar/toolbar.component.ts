import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }
}
