import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/api.service";
import {WordDto} from "../../../shared/dtos";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  wordsList: WordDto[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getWordsList();
  }

  getWordsList() {
    this.apiService.getWordsList().subscribe(res => this.wordsList = res)
  }

}
