import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../shared/api.service";
import {WordDto} from "../../shared/dtos";
import {basicAnimation} from "../../shared/animations/basic-animation";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: basicAnimation
})
export class GameComponent implements OnInit {

  wordsList: WordDto[];
  wordsListAfterRandomize: WordDto[];
  randomWord: WordDto;
  isForeignWordVisible = true;

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
      this.wordsListAfterRandomize = this.parseValue(this.wordsList);
      this.getRandomWord();
    })
  }

  getRandomWord() {
    if (this.isForeignWordVisible) {
      const i = Math.floor(Math.random() * this.wordsListAfterRandomize.length);
      this.randomWord = this.wordsListAfterRandomize[i];
      this.wordsListAfterRandomize.splice(i, 1);
      if (this.listIsEmpty) {
        this.wordsListAfterRandomize = this.parseValue(this.wordsList)
      }
    }
    this.isForeignWordVisible = !this.isForeignWordVisible;
  }

  parseValue(value: WordDto[]) {
    return JSON.parse(JSON.stringify(value));
  }

  get listIsEmpty() {
    return this.wordsListAfterRandomize.length === 0;
  }
}
