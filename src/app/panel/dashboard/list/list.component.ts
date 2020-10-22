import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/api.service";
import {WordDto} from "../../../shared/dtos";
import {Router} from "@angular/router";
import {DetailsService} from "../../details/details.service";
import {basicAnimation} from "../../../shared/animations/basic-animation";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: basicAnimation
})
export class ListComponent implements OnInit {

  wordsList: WordDto[];

  constructor(private apiService: ApiService,
              private router: Router,
              private detailsService: DetailsService) {
  }

  ngOnInit() {
    this.getWordsList();
  }

  getWordsList() {
    this.apiService.getWordsList().subscribe(res => this.wordsList = res);
  }

  navigateToDetails(word: WordDto) {
    this.router.navigateByUrl('home/details');
    this.detailsService.details = word;
  }
}
