import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {basicAnimation} from "../../shared/animations/basic-animation";
import {ApiService} from "../../shared/api.service";
import {WordDto} from "../../shared/dtos";
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: basicAnimation
})
export class DashboardComponent implements OnInit{

  wordsList: WordDto[];
  addFormUrl = 'home/add';
  gameUrl = 'home/game';

  constructor(private router: Router,
              private apiService: ApiService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.getWordsList();
  }

  getWordsList() {
    this.apiService.getWordsList().subscribe(res => this.wordsList = res);
  }

  goTo(url: string) {
    this.router.navigateByUrl(url)
  }

  logout() {
    this.authenticationService.logout();
  }
}
