import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {basicAnimation} from "../../shared/animations/basic-animation";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: basicAnimation
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToAddForm() {
    this.router.navigateByUrl('home/add')
  }

}
