import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {WordDto} from "./dtos";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore,
              private authenticationService: AuthenticationService) {
  }

  addWord(document: WordDto) {
    return this.firestore.collection('words').add(document);
  }

  getWordsList(): Observable<WordDto[]> {
    return this.firestore
      .collection<WordDto>('words', ref =>
        ref.where('uid', '==', this.authenticationService.currentUser.uid))
      .valueChanges();
  }
}
