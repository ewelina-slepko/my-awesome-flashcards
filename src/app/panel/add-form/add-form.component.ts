import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {basicAnimation} from "../../shared/animations/basic-animation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  animations: basicAnimation
})
export class AddFormComponent {

  constructor(private router: Router) {
  }


  save(form: NgForm) {
    console.log(form.form.value);
  }

  navigateToList() {
    this.router.navigateByUrl('home')
  }
}
