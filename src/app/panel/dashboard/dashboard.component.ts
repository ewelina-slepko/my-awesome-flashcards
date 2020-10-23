import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {basicAnimation} from "../../shared/animations/basic-animation";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: basicAnimation
})
export class DashboardComponent {

  addFormUrl = 'home/add';
  gameUrl = 'home/game';

  constructor(private router: Router) {
  }

  goTo(url: string) {
    this.router.navigateByUrl(url)
  }
}
