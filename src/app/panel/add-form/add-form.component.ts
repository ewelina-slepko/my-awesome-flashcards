import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {basicAnimation} from "../../shared/animations/basic-animation";
import {Router} from "@angular/router";
import {ApiService} from "../../shared/api.service";
import {AuthenticationService} from "../../authentication/authentication.service";
import {WordDto} from "../../shared/dtos";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  animations: basicAnimation
})
export class AddFormComponent {

  newWordRequest = {} as WordDto;

  constructor(private router: Router,
              private apiService: ApiService,
              private authenticationService: AuthenticationService) {
  }

  save(form: NgForm) {
    if (form.form.status !== 'INVALID') {
      this.newWordRequest = form.form.value;
      this.newWordRequest.uid = this.authenticationService.currentUser.uid;
      this.apiService.addWord(this.newWordRequest).then(() => this.navigateToList());
    }
  }

  navigateToList() {
    this.router.navigateByUrl('home')
  }
}
