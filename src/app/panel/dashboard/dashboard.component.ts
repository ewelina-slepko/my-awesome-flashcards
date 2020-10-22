import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {basicAnimation} from "../../shared/animations/basic-animation";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: basicAnimation
})
export class DashboardComponent {

  constructor(private router: Router) {
  }

  goToAddForm() {
    this.router.navigateByUrl('home/add')
  }
}
