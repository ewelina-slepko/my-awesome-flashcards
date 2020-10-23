import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../shared/api.service";
import {WordDto} from "../../shared/dtos";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  wordsList: WordDto[] = [];
  randomWord: WordDto;
  isForeignVisible = true;

  constructor(private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.getWordsList();
  }

  navigateToList() {
    this.router.navigateByUrl('home');
  }

  getWordsList() {
    this.apiService.getWordsList().subscribe(res => {
      this.wordsList = res;
      this.getRandomWord(true);
    })
  }

  getRandomWord(firstExecute = false) {
    if (this.isForeignVisible) {
      const i = Math.floor(Math.random() * this.wordsList.length);
      this.randomWord = this.wordsList[i];
      this.wordsList.splice(i, 1);
      if (this.listIsEmpty) {
        this.getWordsList()
      }
    }
    this.isForeignVisible = !this.isForeignVisible;
  }

  get listIsEmpty() {
    return this.wordsList.length === 0;
  }
}
