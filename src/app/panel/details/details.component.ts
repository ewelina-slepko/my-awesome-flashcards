import {Component, OnInit} from '@angular/core';
import {DetailsService} from "./details.service";
import {WordDto} from "../../shared/dtos";
import {Router} from "@angular/router";
import {basicAnimation} from "../../shared/animations/basic-animation";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: basicAnimation
})
export class DetailsComponent implements OnInit {

  details: WordDto;

  constructor(private detailsService: DetailsService,
              private router: Router) {
  }

  ngOnInit() {
    this.details = this.detailsService.details;
  }

  navigateToList() {
    this.router.navigateByUrl('home');
  }
}
